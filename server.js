/*
 * Lingo — сервер: база данных SQLite + ИИ-помощник (Ollama или Anthropic API).
 * Запуск: node server.js  →  http://localhost:3000
 * Нужен Node.js 22.13 или новее (модуль node:sqlite встроен, npm install не нужен).
 */
'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

let DatabaseSync;
try {
  ({ DatabaseSync } = require('node:sqlite'));
} catch (e) {
  console.error('Не найден модуль node:sqlite. Обновите Node.js до версии 22.13 или новее: https://nodejs.org');
  process.exit(1);
}

const ROOT = __dirname;
try { process.loadEnvFile(path.join(ROOT, '.env')); } catch (e) { /* файла .env может не быть */ }

const PORT = Number(process.env.PORT) || 3000;
const DB_FILE = path.join(ROOT, 'lingo.db');

/* Настройки ИИ. Ключи читаются только на сервере и никогда не попадают в браузер. */
const ANTHROPIC_KEY = (process.env.ANTHROPIC_API_KEY || '').trim();
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';
const ANTHROPIC_URL = (process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com').replace(/\/$/, '');
const OLLAMA_URL = (process.env.OLLAMA_URL || 'http://127.0.0.1:11434').replace(/\/$/, '');
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'llama3.2';
// Любой сервис, совместимый с OpenAI (Groq, OpenRouter, Google Gemini, OpenAI и другие)
const OPENAI_KEY = (process.env.OPENAI_API_KEY || '').trim();
const OPENAI_URL = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');
let OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const PROVIDER = (process.env.AI_PROVIDER || (ANTHROPIC_KEY ? 'anthropic' : OPENAI_KEY ? 'openai' : 'ollama')).toLowerCase();

/* ---------- База данных ---------- */
const db = new DatabaseSync(DB_FILE);
db.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS progress (
    word_key TEXT PRIMARY KEY,                       -- например "en|hello"
    box      INTEGER NOT NULL CHECK (box BETWEEN 0 AND 5)
  );
  CREATE TABLE IF NOT EXISTS custom_words (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    lang       TEXT NOT NULL,
    word       TEXT NOT NULL,
    ru         TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (lang, word)
  );
  CREATE TABLE IF NOT EXISTS activity (
    day   TEXT PRIMARY KEY,                          -- YYYY-MM-DD
    count INTEGER NOT NULL CHECK (count >= 0)
  );
  CREATE TABLE IF NOT EXISTS lessons (
    lesson INTEGER PRIMARY KEY CHECK (lesson BETWEEN 1 AND 99),
    best   INTEGER NOT NULL CHECK (best BETWEEN 0 AND 100)   -- лучший результат урока, %
  );
  CREATE TABLE IF NOT EXISTS settings (
    key   TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
`);

function getState() {
  const box = {};
  for (const r of db.prepare('SELECT word_key, box FROM progress').all()) box[r.word_key] = r.box;

  const custom = {};
  for (const r of db.prepare('SELECT lang, word, ru FROM custom_words ORDER BY id').all()) {
    (custom[r.lang] = custom[r.lang] || []).push({ w: r.word, ru: r.ru });
  }

  const days = {};
  for (const r of db.prepare('SELECT day, count FROM activity').all()) days[r.day] = r.count;

  const lessons = {};
  for (const r of db.prepare('SELECT lesson, best FROM lessons').all()) lessons[r.lesson] = { best: r.best };

  const state = { box, custom, days, lessons };
  for (const r of db.prepare('SELECT key, value FROM settings').all()) {
    if (r.key === 'streak') state.streak = Number(r.value) || 0;
    else state[r.key] = r.value;
  }
  return state;
}

const isStr = (v, max) => typeof v === 'string' && v.length > 0 && v.length <= max;
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;
const LANG_RE = /^[a-z]{2,3}$/;

function saveState(s) {
  if (!s || typeof s !== 'object') throw new Error('state must be an object');

  const insProgress = db.prepare('INSERT INTO progress (word_key, box) VALUES (?, ?)');
  const insWord = db.prepare('INSERT OR IGNORE INTO custom_words (lang, word, ru) VALUES (?, ?, ?)');
  const insDay = db.prepare('INSERT INTO activity (day, count) VALUES (?, ?)');
  const insLesson = db.prepare('INSERT INTO lessons (lesson, best) VALUES (?, ?)');
  const insSetting = db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)');

  db.exec('BEGIN');
  try {
    db.exec('DELETE FROM progress; DELETE FROM custom_words; DELETE FROM activity; DELETE FROM settings; DELETE FROM lessons;');

    for (const [key, box] of Object.entries(s.box || {})) {
      if (isStr(key, 120) && Number.isInteger(box) && box >= 0 && box <= 5) insProgress.run(key, box);
    }
    for (const [lang, list] of Object.entries(s.custom || {})) {
      if (!LANG_RE.test(lang) || !Array.isArray(list)) continue;
      for (const w of list) {
        if (w && isStr(w.w, 120) && isStr(w.ru, 200)) insWord.run(lang, w.w, w.ru);
      }
    }
    for (const [day, count] of Object.entries(s.days || {})) {
      if (DAY_RE.test(day) && Number.isInteger(count) && count >= 0) insDay.run(day, count);
    }
    for (const [n, rec] of Object.entries(s.lessons || {})) {
      const k = Number(n), best = rec && rec.best;
      if (Number.isInteger(k) && k >= 1 && k <= 99 && Number.isInteger(best) && best >= 0 && best <= 100) insLesson.run(k, best);
    }
    if (LANG_RE.test(String(s.lang))) insSetting.run('lang', s.lang);
    if (Number.isInteger(s.streak) && s.streak >= 0) insSetting.run('streak', String(s.streak));
    if (DAY_RE.test(String(s.last))) insSetting.run('last', s.last);
    if (/^(A1|A2|B1|B2|C1)$/.test(String(s.level))) insSetting.run('level', s.level);

    db.exec('COMMIT');
  } catch (e) {
    db.exec('ROLLBACK');
    throw e;
  }
}


/* ---------- ИИ-помощник ---------- */
let ollamaModel = OLLAMA_MODEL;

async function ollamaResolve() {
  const r = await fetch(OLLAMA_URL + '/api/tags', { signal: AbortSignal.timeout(3000) });
  if (!r.ok) throw new Error('bad status');
  const names = ((await r.json()).models || []).map((m) => m.name);
  let found = names.find((n) => n === OLLAMA_MODEL || n === OLLAMA_MODEL + ':latest')
    || names.find((n) => n.startsWith(OLLAMA_MODEL + ':'));
  // Если модель не задана вручную, берём любую установленную (кроме embedding-моделей).
  if (!found && !process.env.OLLAMA_MODEL) found = names.find((n) => !/embed/i.test(n));
  return { names, model: found || null };
}

// Каталоги моделей меняются: если выбранной модели у сервиса больше нет, подбираем подходящую сами (для Groq).
const AUTO_MODEL = process.env.OPENAI_AUTO_MODEL === '1' || (process.env.OPENAI_AUTO_MODEL !== '0' && OPENAI_URL.toLowerCase().includes('groq.com'));
let modelCheck = { at: 0, result: null };

async function openaiModelIds() {
  const r = await fetch(OPENAI_URL + '/models', { headers: { authorization: 'Bearer ' + OPENAI_KEY }, signal: AbortSignal.timeout(6000) });
  if (r.status === 401 || r.status === 403) { const e = new Error('auth'); e.status = r.status; throw e; }
  if (!r.ok) throw new Error('models ' + r.status);
  return ((await r.json()).data || []).map((m) => m.id).filter(Boolean);
}

function pickChatModel(ids) {
  const bad = /whisper|tts|guard|embed|playai|orpheus|transcri|moderation|safeguard|image|speech/i;
  const ok = ids.filter((id) => !bad.test(id));
  const prefs = [/llama-3\.3-70b/i, /gpt-oss-120b/i, /gpt-oss-20b/i, /llama-3\.1-8b/i, /llama/i, /qwen/i, /gemma/i, /mistral|mixtral/i];
  for (const re of prefs) { const hit = ok.find((id) => re.test(id)); if (hit) return hit; }
  return ok[0] || null;
}

// Проверяет, что модель существует у сервиса. Результат кэшируется на 5 минут.
async function openaiModelStatus() {
  if (Date.now() - modelCheck.at < 5 * 60 * 1000 && modelCheck.result) return modelCheck.result;
  let result = { ready: true, provider: 'openai', model: OPENAI_MODEL };
  try {
    const ids = await openaiModelIds();
    if (ids.length && !ids.includes(OPENAI_MODEL)) {
      const alt = AUTO_MODEL ? pickChatModel(ids) : null;
      if (alt) {
        console.log('Модель ' + OPENAI_MODEL + ' недоступна для вашего ключа. Использую: ' + alt + ' (чтобы закрепить, впишите её в OPENAI_MODEL в файле .env)');
        OPENAI_MODEL = alt;
        result = { ready: true, provider: 'openai', model: alt };
      } else {
        result = { ready: false, provider: 'openai', hint: 'Модель ' + OPENAI_MODEL + ' не найдена у сервиса. Доступны: ' + ids.slice(0, 12).join(', ') + '. Впишите одну из них в OPENAI_MODEL в файле .env.' };
      }
    }
  } catch (e) {
    if (e.status === 401 || e.status === 403) {
      result = { ready: false, provider: 'openai', hint: 'Сервис не принял ключ OPENAI_API_KEY (ошибка ' + e.status + '). Создайте новый ключ и впишите его в .env.' };
    }
    // если список моделей недоступен, просто пробуем работать с тем, что указано
  }
  modelCheck = { at: Date.now(), result };
  return result;
}

// Частая ошибка: ключ от одного сервиса, а адрес (OPENAI_BASE_URL) от другого.
function keyMismatch() {
  if (PROVIDER !== 'openai' || !OPENAI_KEY) return '';
  const url = OPENAI_URL.toLowerCase();
  if (url.includes('groq.com') && !OPENAI_KEY.startsWith('gsk_')) {
    return 'Адрес указывает на Groq, но ключ не от Groq: ключи Groq начинаются с gsk_ (создайте его на console.groq.com). Либо смените OPENAI_BASE_URL и OPENAI_MODEL под сервис, которому принадлежит ключ.';
  }
  if (url.includes('api.openai.com') && OPENAI_KEY.startsWith('gsk_')) {
    return 'Ключ от Groq (gsk_), а адрес указывает на OpenAI. Укажите OPENAI_BASE_URL=https://api.groq.com/openai/v1 и модель Groq.';
  }
  return '';
}

async function aiStatus() {
  if (PROVIDER === 'anthropic') {
    if (!ANTHROPIC_KEY) return { ready: false, provider: 'anthropic', hint: 'Добавьте ANTHROPIC_API_KEY в файл .env и перезапустите сервер.' };
    return { ready: true, provider: 'anthropic', model: ANTHROPIC_MODEL };
  }
  if (PROVIDER === 'openai') {
    if (!OPENAI_KEY) return { ready: false, provider: 'openai', hint: 'Добавьте OPENAI_API_KEY (и при необходимости OPENAI_BASE_URL и OPENAI_MODEL) в файл .env и перезапустите сервер.' };
    const bad = keyMismatch();
    if (bad) return { ready: false, provider: 'openai', hint: bad };
    return await openaiModelStatus();
  }
  if (PROVIDER !== 'ollama') {
    return { ready: false, provider: PROVIDER, hint: 'Неизвестное значение AI_PROVIDER в .env. Допустимо: ollama, anthropic, openai.' };
  }
  const pull = 'ollama pull ' + OLLAMA_MODEL;
  try {
    const { names, model } = await ollamaResolve();
    if (!model) {
      return { ready: false, provider: 'ollama', hint: names.length
        ? 'Ollama работает, но нужной модели нет. Установлены: ' + names.join(', ') + '. Укажите одну из них в OLLAMA_MODEL в файле .env или выполните: ' + pull
        : 'Ollama работает, но модель не скачана. Выполните в терминале: ' + pull };
    }
    ollamaModel = model;
    return { ready: true, provider: 'ollama', model };
  } catch (e) {
    return { ready: false, provider: 'ollama', hint: 'Ollama не запущена. Установите её с ollama.com, запустите приложение и выполните в терминале: ' + pull };
  }
}

const hits = [];
function rateLimited() {
  const now = Date.now();
  while (hits.length && now - hits[0] > 60000) hits.shift();
  if (hits.length >= 30) return true;
  hits.push(now);
  return false;
}

function cleanChat(body) {
  if (!body || typeof body !== 'object') throw new Error('Неверный запрос.');
  const system = typeof body.system === 'string' ? body.system.slice(0, 6000) : '';
  if (!Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > 30) throw new Error('Неверное число сообщений.');
  const out = [];
  for (const m of body.messages) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string' || !m.content.trim() || m.content.length > 4000) {
      throw new Error('Неверное сообщение.');
    }
    const last = out[out.length - 1];
    if (last && last.role === m.role) last.content += '\n' + m.content;   // роли должны чередоваться
    else out.push({ role: m.role, content: m.content });
  }
  if (out[0].role !== 'user') out.shift();
  if (!out.length) throw new Error('Нет сообщения пользователя.');
  return { system, messages: out };
}

async function* lines(stream) {
  const dec = new TextDecoder();
  let buf = '';
  for await (const chunk of stream) {
    buf += dec.decode(chunk, { stream: true });
    let i;
    while ((i = buf.indexOf('\n')) >= 0) {
      yield buf.slice(0, i).replace(/\r$/, '');
      buf = buf.slice(i + 1);
    }
  }
  if (buf) yield buf;
}

function callUpstream(system, messages, signal, maxTokens) {
  const post = (url, headers, body) => fetch(url, {
    method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body), signal,
  });
  const withSystem = system ? [{ role: 'system', content: system }, ...messages] : messages;
  if (PROVIDER === 'anthropic') {
    const body = { model: ANTHROPIC_MODEL, max_tokens: maxTokens, messages, stream: true };
    if (system) body.system = system;
    return post(ANTHROPIC_URL + '/v1/messages', { 'x-api-key': ANTHROPIC_KEY, 'anthropic-version': '2023-06-01' }, body);
  }
  if (PROVIDER === 'openai') {
    return post(OPENAI_URL + '/chat/completions', { authorization: 'Bearer ' + OPENAI_KEY },
      { model: OPENAI_MODEL, max_tokens: maxTokens, stream: true, messages: withSystem });
  }
  return post(OLLAMA_URL + '/api/chat', {}, { model: ollamaModel, stream: true, options: { num_predict: maxTokens }, messages: withSystem });
}

function upstreamMessage(status) {
  const keyName = PROVIDER === 'anthropic' ? 'ANTHROPIC_API_KEY' : 'OPENAI_API_KEY';
  if (status === 401 || status === 403) return 'Ключ ' + keyName + ' не подходит. Проверьте его в файле .env.';
  if (status === 404) return 'Модель или адрес сервиса не найдены. Проверьте настройки модели в файле .env.';
  if (status === 429) return 'Превышен лимит запросов ИИ-сервиса. Попробуйте позже.';
  return 'ИИ-сервис вернул ошибку (' + status + ').';
}

async function* streamText(up) {
  for await (const line of lines(up.body)) {
    if (PROVIDER === 'ollama') {
      if (!line.trim()) continue;
      let ev;
      try { ev = JSON.parse(line); } catch (e) { continue; }
      if (ev.message && ev.message.content) yield ev.message.content;
      if (ev.done) return;
    } else {
      if (!line.startsWith('data:')) continue;
      const d = line.slice(5).trim();
      if (d === '[DONE]') return;
      let ev;
      try { ev = JSON.parse(d); } catch (e) { continue; }
      if (PROVIDER === 'anthropic') {
        if (ev.type === 'content_block_delta' && ev.delta && ev.delta.type === 'text_delta') yield ev.delta.text;
        else if (ev.type === 'error') return;
      } else {
        const t = ev.choices && ev.choices[0] && ev.choices[0].delta && ev.choices[0].delta.content;
        if (t) yield t;
      }
    }
  }
}

async function handleChat(req, res) {
  let data;
  try { data = cleanChat(JSON.parse(await readBody(req, 200 * 1024))); }
  catch (e) { return sendJson(res, 400, { error: e.message && /[А-Яа-я]/.test(e.message) ? e.message : 'Неверный запрос.' }); }

  if (rateLimited()) return sendJson(res, 429, { error: 'Слишком много запросов. Подождите минуту.' });

  const st = await aiStatus();
  if (!st.ready) return sendJson(res, 503, { error: st.hint });

  const ac = new AbortController();
  res.on('close', () => { if (!res.writableEnded) ac.abort(); });

  let up;
  try { up = await callUpstream(data.system, data.messages, ac.signal, 4096); }
  catch (e) {
    if (ac.signal.aborted) return;
    return sendJson(res, 502, { error: 'Не удалось связаться с ИИ-сервисом.' });
  }
  if (!up.ok) {
    console.error('AI upstream error', up.status, (await up.text().catch(() => '')).slice(0, 300));
    return sendJson(res, up.status === 429 ? 429 : 502, { error: upstreamMessage(up.status) });
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Accel-Buffering': 'no' });
  try {
    for await (const piece of streamText(up)) res.write(piece);
  } catch (e) {
    if (!ac.signal.aborted) console.error('AI stream error', e.message);
  }
  res.end();
}

// Пробный запрос: проверяет, что ключ, адрес и модель действительно работают.
async function handleTest(req, res) {
  try { await readBody(req, 1024); } catch (e) { /* тело не важно */ }
  const st = await aiStatus();
  if (!st.ready) return sendJson(res, 200, { ok: false, error: st.hint });
  try {
    const up = await callUpstream('', [{ role: 'user', content: 'Reply with the single word: OK' }], AbortSignal.timeout(90000), 400);
    if (!up.ok) {
      const detail = (await up.text().catch(() => '')).slice(0, 300);
      return sendJson(res, 200, { ok: false, error: upstreamMessage(up.status), detail });
    }
    let text = '';
    for await (const piece of streamText(up)) { text += piece; if (text.length > 40) break; }
    text = text.trim();
    return sendJson(res, 200, text
      ? { ok: true, provider: st.provider, model: st.model, reply: text }
      : { ok: false, error: 'Модель не вернула текст. Попробуйте ещё раз; если повторяется, выберите другую модель в OPENAI_MODEL (файл .env).' });
  } catch (e) {
    return sendJson(res, 200, { ok: false, error: 'Не удалось связаться с ИИ-сервисом: ' + (e.message || e) });
  }
}

/* ---------- HTTP ---------- */
const STATIC = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/styles.css': ['styles.css', 'text/css; charset=utf-8'],
  '/script.js': ['script.js', 'text/javascript; charset=utf-8'],
};

function sendJson(res, code, data) {
  const body = JSON.stringify(data);
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function readBody(req, limit = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > limit) { reject(new Error('too large')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const p = url.pathname;

    // Защита: только localhost, и запросы на запись только с самого сайта.
    const host = String(req.headers.host || '').toLowerCase();
    if (host !== 'localhost:' + PORT && host !== '127.0.0.1:' + PORT) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Forbidden');
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const origin = req.headers.origin;
      const okOrigin = !origin || origin === 'http://localhost:' + PORT || origin === 'http://127.0.0.1:' + PORT;
      const okType = String(req.headers['content-type'] || '').toLowerCase().startsWith('application/json');
      if (!okOrigin || !okType) return sendJson(res, 403, { error: 'forbidden' });
    }

    if (p === '/api/ai/status' && req.method === 'GET') return sendJson(res, 200, await aiStatus());
    if (p === '/api/chat' && req.method === 'POST') return handleChat(req, res);
    if (p === '/api/ai/test' && req.method === 'POST') return handleTest(req, res);

    if (p === '/api/state') {
      if (req.method === 'GET') return sendJson(res, 200, getState());
      if (req.method === 'PUT') {
        let data;
        try { data = JSON.parse(await readBody(req)); }
        catch (e) { return sendJson(res, 400, { error: 'invalid JSON' }); }
        try { saveState(data); }
        catch (e) { return sendJson(res, 400, { error: e.message }); }
        return sendJson(res, 200, { ok: true });
      }
      res.writeHead(405, { Allow: 'GET, PUT' });
      return res.end();
    }

    if (p.startsWith('/api/')) return sendJson(res, 404, { error: 'not found' });

    const file = STATIC[p];
    if (file && req.method === 'GET') {
      const data = fs.readFileSync(path.join(ROOT, file[0]));
      res.writeHead(200, { 'Content-Type': file[1], 'Cache-Control': 'no-cache' });
      return res.end(data);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Не найдено');
  } catch (e) {
    console.error(e);
    if (!res.headersSent) sendJson(res, 500, { error: 'server error' });
  }
});

// Только localhost: сайт доступен с вашего компьютера, но не из сети.
server.listen(PORT, '127.0.0.1', () => {
  console.log('Lingo запущен: http://localhost:' + PORT);
  console.log('База данных: ' + DB_FILE);
  aiStatus().then((s) => {
    console.log(s.ready ? 'ИИ-помощник: ' + s.provider + ' (' + s.model + ')' : 'ИИ-помощник не настроен. ' + s.hint);
  });
});

function shutdown() { server.close(() => { db.close(); process.exit(0); }); }
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
