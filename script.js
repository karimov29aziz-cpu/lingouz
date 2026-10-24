/* ================= Данные ================= */
var RU16 = ['привет','спасибо','пожалуйста','вода','еда','друг','дом','книга','время','семья','любовь','город','красивый','есть (кушать)','пить','завтра'];
function zip(list){ return list.map(function(p,i){ return [p[0], RU16[i], p[1]||'']; }); }

var LANGS = {
  en:{name:'Английский',c:'#2F4BFF',i:'#FFFFFF',code:'en-US',words:[
    ['hello','привет','həˈləʊ','A1'], ['thank you','спасибо','θæŋk juː','A1'], ['please','пожалуйста','pliːz','A1'],
    ['water','вода','ˈwɔːtə','A1'], ['food','еда','fuːd','A1'], ['friend','друг','frend','A1'],
    ['house','дом','haʊs','A1'], ['book','книга','bʊk','A1'], ['time','время','taɪm','A1'],
    ['day','день','deɪ','A1'], ['night','ночь','naɪt','A1'], ['work','работа','wɜːk','A1'],
    ['family','семья','ˈfæməli','A1'], ['love','любовь','lʌv','A1'], ['city','город','ˈsɪti','A1'],
    ['street','улица','striːt','A1'], ['big','большой','bɪɡ','A1'], ['small','маленький','smɔːl','A1'],
    ['eat','есть (кушать)','iːt','A1'], ['drink','пить','drɪŋk','A1'], ['go','идти','ɡəʊ','A1'],
    ['want','хотеть','wɒnt','A1'], ['tomorrow','завтра','təˈmɒrəʊ','A1'], ['yesterday','вчера','ˈjestədeɪ','A1'],
    ['mother','мама','ˈmʌðə','A1'], ['father','папа','ˈfɑːðə','A1'], ['school','школа','skuːl','A1'],
    ['happy','счастливый','ˈhæpi','A1'], ['help','помогать','help','A1'], ['speak','говорить','spiːk','A1'],
    ['beautiful','красивый','ˈbjuːtɪfl','A2'], ['understand','понимать','ˌʌndəˈstænd','A2'], ['always','всегда','ˈɔːlweɪz','A2'],
    ['never','никогда','ˈnevə','A2'], ['journey','путешествие','ˈdʒɜːni','A2'], ['weather','погода','ˈweðə','A2'],
    ['holiday','отпуск','ˈhɒlədeɪ','A2'], ['ticket','билет','ˈtɪkɪt','A2'], ['borrow','брать взаймы','ˈbɒrəʊ','A2'],
    ['decide','решать','dɪˈsaɪd','A2'], ['invite','приглашать','ɪnˈvaɪt','A2'], ['popular','популярный','ˈpɒpjələ','A2'],
    ['dangerous','опасный','ˈdeɪndʒərəs','A2'], ['expensive','дорогой','ɪkˈspensɪv','A2'], ['cheap','дешёвый','tʃiːp','A2'],
    ['dinner','ужин','ˈdɪnə','A2'], ['kitchen','кухня','ˈkɪtʃɪn','A2'], ['message','сообщение','ˈmesɪdʒ','A2'],
    ['luggage','багаж','ˈlʌɡɪdʒ','A2'], ['reply','отвечать','rɪˈplaɪ','A2'], ['neighbour','сосед','ˈneɪbə','A2'],
    ['wait','ждать','weɪt','A2'], ['remember','помнить','rɪˈmembə','A2'], ['forget','забывать','fəˈɡet','A2'],
    ['prefer','предпочитать','prɪˈfɜː','A2'], ['during','во время','ˈdjʊərɪŋ','A2'], ['maybe','может быть','ˈmeɪbi','A2'],
    ['usually','обычно','ˈjuːʒuəli','A2'], ['enough','достаточно','ɪˈnʌf','A2'], ['building','здание','ˈbɪldɪŋ','A2'],
    ['achieve','достигать','əˈtʃiːv','B1'], ['advice','совет','ədˈvaɪs','B1'], ['opportunity','возможность','ˌɒpəˈtjuːnəti','B1'],
    ['improve','улучшать','ɪmˈpruːv','B1'], ['experience','опыт','ɪkˈspɪəriəns','B1'], ['environment','окружающая среда','ɪnˈvaɪrənmənt','B1'],
    ['suggest','предлагать','səˈdʒest','B1'], ['avoid','избегать','əˈvɔɪd','B1'], ['manage','справляться','ˈmænɪdʒ','B1'],
    ['consider','обдумывать','kənˈsɪdə','B1'], ['however','однако','haʊˈevə','B1'], ['although','хотя','ɔːlˈðəʊ','B1'],
    ['knowledge','знания','ˈnɒlɪdʒ','B1'], ['behaviour','поведение','bɪˈheɪvjə','B1'], ['relationship','отношения','rɪˈleɪʃnʃɪp','B1'],
    ['responsible','ответственный','rɪˈspɒnsəbl','B1'], ['confident','уверенный','ˈkɒnfɪdənt','B1'], ['reliable','надёжный','rɪˈlaɪəbl','B1'],
    ['increase','увеличиваться','ɪnˈkriːs','B1'], ['reduce','сокращать','rɪˈdjuːs','B1'], ['recommend','рекомендовать','ˌrekəˈmend','B1'],
    ['ignore','игнорировать','ɪɡˈnɔː','B1'], ['rely','полагаться','rɪˈlaɪ','B1'], ['career','карьера','kəˈrɪə','B1'],
    ['deadline','крайний срок','ˈdedlaɪn','B1'], ['salary','зарплата','ˈsæləri','B1'], ['complain','жаловаться','kəmˈpleɪn','B1'],
    ['disappointed','разочарованный','ˌdɪsəˈpɔɪntɪd','B1'], ['competition','соревнование','ˌkɒmpəˈtɪʃn','B1'], ['apply','подавать заявку','əˈplaɪ','B1'],
    ['significant','значительный','sɪɡˈnɪfɪkənt','B2'], ['consequence','последствие','ˈkɒnsɪkwəns','B2'], ['assume','предполагать','əˈsjuːm','B2'],
    ['approach','подход','əˈprəʊtʃ','B2'], ['establish','устанавливать','ɪˈstæblɪʃ','B2'], ['efficient','эффективный','ɪˈfɪʃnt','B2'],
    ['evidence','доказательство','ˈevɪdəns','B2'], ['likely','вероятный','ˈlaɪkli','B2'], ['maintain','поддерживать','meɪnˈteɪn','B2'],
    ['reluctant','неохотный','rɪˈlʌktənt','B2'], ['ambiguous','неоднозначный','æmˈbɪɡjuəs','B2'], ['consistent','последовательный','kənˈsɪstənt','B2'],
    ['contribute','вносить вклад','kənˈtrɪbjuːt','B2'], ['criticise','критиковать','ˈkrɪtɪsaɪz','B2'], ['emphasise','подчёркивать','ˈemfəsaɪz','B2'],
    ['guarantee','гарантия','ˌɡærənˈtiː','B2'], ['implement','внедрять','ˈɪmplɪment','B2'], ['investigate','расследовать','ɪnˈvestɪɡeɪt','B2'],
    ['overcome','преодолевать','ˌəʊvəˈkʌm','B2'], ['perspective','точка зрения','pəˈspektɪv','B2'], ['priority','приоритет','praɪˈɒrəti','B2'],
    ['reputation','репутация','ˌrepjuˈteɪʃn','B2'], ['sceptical','скептический','ˈskeptɪkl','B2'], ['shortage','нехватка','ˈʃɔːtɪdʒ','B2'],
    ['trend','тенденция','trend','B2'], ['widespread','широко распространённый','ˈwaɪdspred','B2'], ['whereas','тогда как','weərˈæz','B2'],
    ['thoroughly','тщательно','ˈθʌrəli','B2'], ['undertake','предпринимать','ˌʌndəˈteɪk','B2'], ['viable','жизнеспособный','ˈvaɪəbl','B2'],
    ['meticulous','дотошный','məˈtɪkjələs','C1'], ['ubiquitous','повсеместный','juːˈbɪkwɪtəs','C1'], ['mitigate','смягчать','ˈmɪtɪɡeɪt','C1'],
    ['scrutinise','тщательно изучать','ˈskruːtənaɪz','C1'], ['inevitable','неизбежный','ɪnˈevɪtəbl','C1'], ['plausible','правдоподобный','ˈplɔːzəbl','C1'],
    ['resilient','стойкий','rɪˈzɪliənt','C1'], ['pragmatic','прагматичный','præɡˈmætɪk','C1'], ['elaborate','подробный, сложный','ɪˈlæbərət','C1'],
    ['arbitrary','произвольный','ˈɑːbɪtrəri','C1'], ['coherent','связный','kəʊˈhɪərənt','C1'], ['inherent','присущий','ɪnˈhɪərənt','C1'],
    ['undermine','подрывать','ˌʌndəˈmaɪn','C1'], ['alleviate','облегчать','əˈliːvieɪt','C1'], ['advocate','отстаивать','ˈædvəkeɪt','C1'],
    ['nuance','нюанс','ˈnjuːɑːns','C1'], ['compelling','убедительный','kəmˈpelɪŋ','C1'], ['fluctuate','колебаться','ˈflʌktʃueɪt','C1'],
    ['discrepancy','расхождение','dɪˈskrepənsi','C1'], ['hinder','препятствовать','ˈhɪndə','C1'], ['reconcile','примирять','ˈrekənsaɪl','C1'],
    ['substantiate','подтверждать фактами','səbˈstænʃieɪt','C1'], ['tentative','предварительный','ˈtentətɪv','C1'], ['unprecedented','беспрецедентный','ʌnˈpresɪdentɪd','C1'],
    ['ambivalent','двойственный','æmˈbɪvələnt','C1'], ['exacerbate','усугублять','ɪɡˈzæsəbeɪt','C1'], ['foster','способствовать','ˈfɒstə','C1'],
    ['livelihood','средства к существованию','ˈlaɪvlihʊd','C1'], ['stringent','строгий','ˈstrɪndʒənt','C1'], ['profound','глубокий','prəˈfaʊnd','C1']]},
  es:{name:'Испанский',c:'#D63E1A',i:'#FFFFFF',code:'es-ES',words:zip([['hola'],['gracias'],['por favor'],['agua'],['la comida'],['el amigo'],['la casa'],['el libro'],['el tiempo'],['la familia'],['el amor'],['la ciudad'],['hermoso'],['comer'],['beber'],['mañana']])},
  de:{name:'Немецкий',c:'#FFC300',i:'#1A1400',code:'de-DE',words:zip([['Hallo'],['Danke'],['Bitte'],['das Wasser'],['das Essen'],['der Freund'],['das Haus'],['das Buch'],['die Zeit'],['die Familie'],['die Liebe'],['die Stadt'],['schön'],['essen'],['trinken'],['morgen']])},
  fr:{name:'Французский',c:'#7A4DF5',i:'#FFFFFF',code:'fr-FR',words:zip([['bonjour'],['merci'],['s’il vous plaît'],['l’eau'],['la nourriture'],['l’ami'],['la maison'],['le livre'],['le temps'],['la famille'],['l’amour'],['la ville'],['beau'],['manger'],['boire'],['demain']])},
  it:{name:'Итальянский',c:'#0B7F50',i:'#FFFFFF',code:'it-IT',words:zip([['ciao'],['grazie'],['per favore'],['l’acqua'],['il cibo'],['l’amico'],['la casa'],['il libro'],['il tempo'],['la famiglia'],['l’amore'],['la città'],['bello'],['mangiare'],['bere'],['domani']])},
  tr:{name:'Турецкий',c:'#D81E5B',i:'#FFFFFF',code:'tr-TR',words:zip([['merhaba'],['teşekkürler'],['lütfen'],['su'],['yemek'],['arkadaş'],['ev'],['kitap'],['zaman'],['aile'],['aşk'],['şehir'],['güzel'],['yemek yemek'],['içmek'],['yarın']])},
  zh:{name:'Китайский',c:'#0A7480',i:'#FFFFFF',code:'zh-CN',words:zip([['你好','nǐ hǎo'],['谢谢','xièxie'],['请','qǐng'],['水','shuǐ'],['食物','shíwù'],['朋友','péngyou'],['家','jiā'],['书','shū'],['时间','shíjiān'],['家庭','jiātíng'],['爱','ài'],['城市','chéngshì'],['美丽','měilì'],['吃','chī'],['喝','hē'],['明天','míngtiān']])},
  ja:{name:'Японский',c:'#FF8FB1',i:'#2A0A16',code:'ja-JP',words:zip([['こんにちは','konnichiwa'],['ありがとう','arigatō'],['お願いします','onegai shimasu'],['水','mizu'],['食べ物','tabemono'],['友達','tomodachi'],['家','ie'],['本','hon'],['時間','jikan'],['家族','kazoku'],['愛','ai'],['都市','toshi'],['美しい','utsukushii'],['食べる','taberu'],['飲む','nomu'],['明日','ashita']])}
};
var KEYS = Object.keys(LANGS);
var LEVELS = ['A1','A2','B1','B2','C1'];
var LEVEL_INFO = {A1:'Начинающий: самые частые слова',A2:'Элементарный: быт и путешествия',B1:'Средний: работа, планы, мнения',B2:'Выше среднего: абстрактные темы',C1:'Продвинутый: тонкие оттенки смысла'};

var TIPS = [
  ['Десять минут лучше, чем два часа','Мозг запоминает то, к чему возвращаются часто. Короткое ежедневное занятие работает лучше, чем марафон раз в неделю. <b>Привяжите занятие к привычке:</b> например, карточки за утренним кофе.'],
  ['Учите слово в предложении','Одинокое слово забывается быстро. Придумайте с новым словом свою фразу про вашу жизнь: <b>«I want water»</b> запомнится лучше, чем просто «water — вода».'],
  ['Повторяйте с интервалами','Если вернуться к слову через день, потом через три, потом через неделю, оно остаётся надолго. Карточки в тренажёре делают это сами: слова, которые вы знаете, показываются реже, а трудные чаще.'],
  ['Говорите вслух с первого дня','Нажмите 🔊, послушайте слово и повторите его вслух. Так вы тренируете не только память, но и произношение. Можно записать себя на диктофон и сравнить.'],
  ['Слушайте то, что вам интересно','Сериал, подкаст или канал о любимом хобби дают живую речь. Включайте <b>субтитры на изучаемом языке</b>, а не на русском. Не пытайтесь понять всё: ловите знакомые слова.'],
  ['Не ждите, пока будете готовы','Писать и говорить можно уже на втором уроке. Ошибки это нормально: ИИ-помощник поправит вас по-русски и не будет осуждать. Ошибка, которую разобрали, запоминается лучше правильной фразы, которую просто прочитали.']
];
var CHIPS = [
  ['Написать код','Напиши полный рабочий пример на Python, который читает CSV-файл и считает среднее значение числового столбца. Объясни, как его запустить.'],
  ['Разобрать идею','Помоги превратить мою идею в понятный план действий. Сначала задай один важный уточняющий вопрос.'],
  ['Объяснить тему','Объясни простыми словами, как работает машинное обучение, и приведи наглядный пример.'],
  ['Создать промпт для картинки','Составь профессиональный промпт на английском для генератора изображений: минималистичный логотип кофейни в тёплых природных цветах. Добавь краткую визуальную концепцию.'],
  ['Улучшить текст','Отредактируй мой текст: сделай его яснее, грамотнее и профессиональнее, сохранив смысл. Вот текст: '],
  ['Спланировать проект','Составь практичный план разработки небольшого веб-приложения для списка задач: этапы, технологии и критерии готовности.']
];


/* Предложения для сборки из блоков: [по-русски, на изучаемом языке, запасные варианты]. У китайского и японского слова разделены пробелами. */
var SENT = {
  en:{
    A1:[['Я пью воду.','I drink water.'],['У меня есть друг.','I have a friend.'],['Это моя книга.','This is my book.'],['Мы любим нашу семью.','We love our family.'],
        ['Он хочет пить воду.','He wants to drink water.'],['Мой дом большой.','My house is big.'],['Моя мама работает в школе.','My mother works at a school.'],
        ['Я говорю по-английски.','I speak English.'],['Спасибо за твою помощь.','Thank you for your help.'],['Завтра я иду на работу.','I go to work tomorrow.',['Tomorrow I go to work.']]],
    A2:[['Вчера мы ужинали на кухне.','We had dinner in the kitchen yesterday.',['Yesterday we had dinner in the kitchen.']],['Сколько стоит этот билет?','How much is this ticket?'],
        ['Я никогда не забываю свой багаж.','I never forget my luggage.'],['Сегодня погода очень хорошая.','The weather is very good today.',['Today the weather is very good.']],
        ['Мы можем подождать здесь?','Can we wait here?'],['Она предпочитает дешёвые билеты.','She prefers cheap tickets.'],['Они пригласили соседа на ужин.','They invited the neighbour to dinner.'],
        ['Я решил поехать в отпуск.','I decided to go on holiday.'],['Больница очень большая.','The hospital is very big.'],['Это путешествие было опасным.','This journey was dangerous.']],
    B1:[['Я надеюсь улучшить свой английский в этом году.','I hope to improve my English this year.',['This year I hope to improve my English.']],
        ['Он посоветовал мне избегать этой ошибки.','He advised me to avoid this mistake.'],['Хотя было поздно, мы продолжили работать.','Although it was late, we kept working.'],
        ['Она успела закончить все задачи вовремя.','She managed to finish all the tasks on time.'],['Мне нужно сократить расходы.','I need to reduce my expenses.'],
        ['У нас крайний срок в пятницу.','We have a deadline on Friday.',['On Friday we have a deadline.']],['Я полагаюсь на его опыт.','I rely on his experience.'],
        ['Они жаловались на шум по соседству.','They complained about the noise next door.'],['Я очень разочарован результатом.','I am very disappointed with the result.'],
        ['Он ответственный и надёжный человек.','He is a responsible and reliable person.']],
    B2:[['Нам нужно учесть все последствия.','We need to consider all the consequences.'],['Она неохотно согласилась на этот подход.','She reluctantly agreed to this approach.'],
        ['Доказательства говорят о том, что цены вырастут.','The evidence suggests that prices will rise.'],['Эта проблема широко распространена.','This problem is widespread.'],
        ['Руководитель подчеркнул, что приоритетом остаётся качество.','The manager emphasised that quality remains a priority.'],
        ['Мы должны внедрить новые правила как можно скорее.','We must implement the new rules as soon as possible.'],['Он скептически относится к этим цифрам.','He is sceptical about these figures.'],
        ['Репутация компании пострадала из-за нехватки сотрудников.','The reputation of the company suffered because of the staff shortage.'],
        ['Нам удалось преодолеть все трудности.','We managed to overcome all the difficulties.'],['Тщательно проверьте каждый документ.','Check every document thoroughly.']],
    C1:[['Это решение неизбежно повлияет на всех нас.','This decision will inevitably affect all of us.'],['Её аргументы звучат убедительно и последовательно.','Her arguments sound compelling and coherent.'],
        ['Каждую деталь контракта нужно тщательно изучить.','Every detail of the contract needs to be scrutinised carefully.'],
        ['Новые меры помогут смягчить последствия кризиса.','The new measures will help mitigate the effects of the crisis.'],['Он выступает за более строгие правила.','He advocates for stricter rules.'],
        ['Между двумя отчётами есть существенное расхождение.','There is a significant discrepancy between the two reports.'],
        ['Эти трудности присущи любому крупному проекту.','These difficulties are inherent in any large project.'],['Цены колеблются в зависимости от сезона.','Prices fluctuate depending on the season.'],
        ['Её стойкость произвела на всех глубокое впечатление.','Her resilience made a profound impression on everyone.'],['Такая критика только подрывает доверие к команде.','Such criticism only undermines trust in the team.']]
  },
  es:[['Я пью воду.','Yo bebo agua.'],['Мой дом большой.','Mi casa es grande.'],['У меня есть друг.','Tengo un amigo.'],['Спасибо за твою помощь.','Gracias por tu ayuda.'],['Завтра я еду в город.','Mañana voy a la ciudad.'],['Книга в доме.','El libro está en la casa.']],
  de:[['Я пью воду.','Ich trinke Wasser.'],['Мой дом большой.','Mein Haus ist groß.'],['У меня есть друг.','Ich habe einen Freund.'],['Спасибо за твою помощь.','Danke für deine Hilfe.'],['Завтра я иду в город.','Morgen gehe ich in die Stadt.'],['Книга лежит на столе.','Das Buch ist auf dem Tisch.']],
  fr:[['Я пью воду.','Je bois de l’eau.'],['Мой дом большой.','Ma maison est grande.'],['У меня есть друг.','J’ai un ami.'],['Спасибо за твою помощь.','Merci pour ton aide.'],['Завтра я иду в город.','Demain je vais en ville.'],['Книга на столе.','Le livre est sur la table.']],
  it:[['Я пью воду.','Io bevo l’acqua.'],['Мой дом большой.','La mia casa è grande.'],['У меня есть друг.','Ho un amico.'],['Спасибо за твою помощь.','Grazie per il tuo aiuto.'],['Завтра я иду в город.','Domani vado in città.'],['Книга на столе.','Il libro è sul tavolo.']],
  tr:[['Я пью воду.','Ben su içiyorum.'],['Мой дом большой.','Benim evim büyük.'],['У меня есть друг.','Bir arkadaşım var.'],['Спасибо за твою помощь.','Yardımın için teşekkürler.'],['Завтра я иду в город.','Yarın şehre gidiyorum.'],['Книга на столе.','Kitap masanın üstünde.']],
  zh:[['Я пью воду.','我 喝 水。'],['Мой дом большой.','我 的 家 很 大。'],['У меня есть друг.','我 有 一个 朋友。'],['Спасибо за твою помощь.','谢谢 你 的 帮助。'],['Завтра я иду в город.','明天 我 去 城里。'],['Это моя книга.','这 是 我 的 书。']],
  ja:[['Я пью воду.','私 は 水 を 飲みます。'],['Мой дом большой.','私 の 家 は 大きい です。'],['У меня есть друг.','私 は 友達 が います。'],['Спасибо за помощь.','手伝って くれて ありがとう。'],['Завтра я иду в город.','明日 私 は 町 へ 行きます。'],['Это моя книга.','これ は 私 の 本 です。']]
};

/* 16 уроков английского: в каждом по 8 предложений для сборки из блоков. */
var LESSONS = [
 {
  "t": "To be: я, ты, он, она",
  "tip": "Глагол to be («быть») нужен почти в каждом предложении: I am, you are, he/she/it is, we/they are. По-русски мы его опускаем («Я студент»), а по-английски он обязателен.",
  "s": [
   [
    "Я студент.",
    "I am a student."
   ],
   [
    "Ты мой друг.",
    "You are my friend."
   ],
   [
    "Он врач.",
    "He is a doctor."
   ],
   [
    "Она учитель.",
    "She is a teacher."
   ],
   [
    "Мы дома.",
    "We are at home."
   ],
   [
    "Они в городе.",
    "They are in the city."
   ],
   [
    "Это моя семья.",
    "This is my family."
   ],
   [
    "Я счастлив.",
    "I am happy."
   ]
  ]
 },
 {
  "t": "Артикли a / an и вопросы с to be",
  "tip": "Перед исчисляемым существительным в единственном числе ставим a (a book) или an перед гласным звуком (an apple). В вопросе to be выходит вперёд: Are you…? Is he…? Для отрицания добавляем not.",
  "s": [
   [
    "Это яблоко.",
    "It is an apple."
   ],
   [
    "Ты студент?",
    "Are you a student?"
   ],
   [
    "Он дома?",
    "Is he at home?"
   ],
   [
    "Это твоя книга?",
    "Is this your book?"
   ],
   [
    "Они врачи?",
    "Are they doctors?"
   ],
   [
    "Я не врач.",
    "I am not a doctor."
   ],
   [
    "Она не дома.",
    "She is not at home."
   ],
   [
    "Мы не готовы.",
    "We are not ready."
   ]
  ]
 },
 {
  "t": "Have: у меня есть",
  "tip": "I have = «у меня есть». С he, she, it используем has: He has a sister. Это самый простой способ сказать, что что-то у вас есть.",
  "s": [
   [
    "У меня есть машина.",
    "I have a car."
   ],
   [
    "У него есть сестра.",
    "He has a sister."
   ],
   [
    "У неё есть кошка.",
    "She has a cat."
   ],
   [
    "У нас есть время.",
    "We have time."
   ],
   [
    "У них большой дом.",
    "They have a big house."
   ],
   [
    "У меня есть два брата.",
    "I have two brothers."
   ],
   [
    "У тебя красивый дом.",
    "You have a beautiful house."
   ],
   [
    "У моего друга есть собака.",
    "My friend has a dog."
   ]
  ]
 },
 {
  "t": "Present Simple: я, ты, мы, они",
  "tip": "Present Simple описывает привычки и факты. С I, you, we, they глагол не меняется: I work, they live. Частые слова-подсказки: every day, always, often, usually.",
  "s": [
   [
    "Я работаю каждый день.",
    "I work every day.",
    [
     "Every day I work."
    ]
   ],
   [
    "Мы живём в городе.",
    "We live in the city."
   ],
   [
    "Они говорят по-английски.",
    "They speak English."
   ],
   [
    "Я пью чай по утрам.",
    "I drink tea in the morning.",
    [
     "In the morning I drink tea."
    ]
   ],
   [
    "Ты любишь музыку.",
    "You like music."
   ],
   [
    "Мы читаем книги.",
    "We read books."
   ],
   [
    "Они учатся в школе.",
    "They study at school."
   ],
   [
    "Я всегда завтракаю дома.",
    "I always have breakfast at home."
   ]
  ]
 },
 {
  "t": "Present Simple: он, она, оно (+s)",
  "tip": "С he, she, it к глаголу добавляется -s: he works, she lives. Если глагол оканчивается на -o или -ch/-sh, добавляем -es: he goes, she watches.",
  "s": [
   [
    "Он работает в банке.",
    "He works in a bank."
   ],
   [
    "Она живёт в Лондоне.",
    "She lives in London."
   ],
   [
    "Мой брат любит футбол.",
    "My brother likes football."
   ],
   [
    "Она пьёт кофе утром.",
    "She drinks coffee in the morning.",
    [
     "In the morning she drinks coffee."
    ]
   ],
   [
    "Он говорит по-русски.",
    "He speaks Russian."
   ],
   [
    "Моя мама готовит ужин.",
    "My mother cooks dinner."
   ],
   [
    "Он ходит в школу.",
    "He goes to school."
   ],
   [
    "Она часто читает книги.",
    "She often reads books."
   ]
  ]
 },
 {
  "t": "Вопросы: do и does",
  "tip": "В вопросах Present Simple нужен помощник: do (I, you, we, they) или does (he, she, it). Тогда основной глагол снова без -s: Does he work? Вопросительное слово ставим в начало: Where do you live?",
  "s": [
   [
    "Ты говоришь по-английски?",
    "Do you speak English?"
   ],
   [
    "Он работает здесь?",
    "Does he work here?"
   ],
   [
    "Вы любите кофе?",
    "Do you like coffee?"
   ],
   [
    "Она живёт в этом городе?",
    "Does she live in this city?"
   ],
   [
    "Они говорят по-русски?",
    "Do they speak Russian?"
   ],
   [
    "Где ты живёшь?",
    "Where do you live?"
   ],
   [
    "Что он делает по вечерам?",
    "What does he do in the evening?"
   ],
   [
    "Когда вы обедаете?",
    "When do you have lunch?"
   ]
  ]
 },
 {
  "t": "Отрицание: don't и doesn't",
  "tip": "Чтобы сказать «не», ставим don't (I, you, we, they) или doesn't (he, she, it) перед глаголом: I don't drink coffee. He doesn't like fish. Глагол после них без -s.",
  "s": [
   [
    "Я не пью кофе.",
    "I don't drink coffee."
   ],
   [
    "Она не работает по субботам.",
    "She doesn't work on Saturdays."
   ],
   [
    "Мы не живём здесь.",
    "We don't live here."
   ],
   [
    "Он не любит рыбу.",
    "He doesn't like fish."
   ],
   [
    "Они не говорят по-французски.",
    "They don't speak French."
   ],
   [
    "Я не понимаю этот вопрос.",
    "I don't understand this question."
   ],
   [
    "Моя сестра не ест мясо.",
    "My sister doesn't eat meat."
   ],
   [
    "Мы не работаем в воскресенье.",
    "We don't work on Sunday."
   ]
  ]
 },
 {
  "t": "Can и can't: уметь, мочь",
  "tip": "Can значит «уметь» или «мочь» и одинаково для всех лиц: I can swim, she can swim. После can глагол стоит без to и без -s. Отрицание: can't. Вопрос: Can you…?",
  "s": [
   [
    "Я умею плавать.",
    "I can swim."
   ],
   [
    "Она может помочь тебе.",
    "She can help you."
   ],
   [
    "Он не умеет готовить.",
    "He can't cook."
   ],
   [
    "Ты можешь открыть окно?",
    "Can you open the window?"
   ],
   [
    "Мы не можем ждать.",
    "We can't wait."
   ],
   [
    "Они умеют говорить по-английски.",
    "They can speak English."
   ],
   [
    "Могу я взять эту книгу?",
    "Can I take this book?"
   ],
   [
    "Я не могу найти ключи.",
    "I can't find my keys."
   ]
  ]
 },
 {
  "t": "There is и there are: есть, имеется",
  "tip": "There is + единственное число, there are + множественное: There is a table. There are two chairs. В вопросе меняем порядок: Is there…? Для «нет» используем no: There is no milk.",
  "s": [
   [
    "В комнате есть стол.",
    "There is a table in the room.",
    [
     "In the room there is a table."
    ]
   ],
   [
    "В городе много парков.",
    "There are many parks in the city."
   ],
   [
    "В холодильнике нет молока.",
    "There is no milk in the fridge."
   ],
   [
    "На улице есть кафе?",
    "Is there a cafe on the street?"
   ],
   [
    "В нашей школе два зала.",
    "There are two halls in our school."
   ],
   [
    "В сумке есть книга.",
    "There is a book in the bag."
   ],
   [
    "Здесь нет людей.",
    "There are no people here."
   ],
   [
    "В этом доме есть сад?",
    "Is there a garden in this house?"
   ]
  ]
 },
 {
  "t": "Present Continuous: что происходит сейчас",
  "tip": "Для действия в данный момент: am/is/are + глагол с -ing: I am reading. She is cooking. Подсказки: now, at the moment. Вопрос: What are you doing?",
  "s": [
   [
    "Я сейчас читаю книгу.",
    "I am reading a book now.",
    [
     "Now I am reading a book."
    ]
   ],
   [
    "Она сейчас готовит ужин.",
    "She is cooking dinner now."
   ],
   [
    "Мы смотрим фильм.",
    "We are watching a film."
   ],
   [
    "Они играют в парке.",
    "They are playing in the park."
   ],
   [
    "Что ты делаешь?",
    "What are you doing?"
   ],
   [
    "Он не спит.",
    "He is not sleeping."
   ],
   [
    "Идёт дождь.",
    "It is raining."
   ],
   [
    "Мы ждём автобус.",
    "We are waiting for the bus."
   ]
  ]
 },
 {
  "t": "Past Simple: правильные глаголы",
  "tip": "Для прошедших действий к правильным глаголам добавляем -ed: work, worked; play, played. Форма одинакова для всех лиц. Подсказки: yesterday, last night, last year.",
  "s": [
   [
    "Вчера я работал дома.",
    "I worked at home yesterday.",
    [
     "Yesterday I worked at home."
    ]
   ],
   [
    "Она позвонила мне вчера вечером.",
    "She called me last night.",
    [
     "Last night she called me."
    ]
   ],
   [
    "Мы жили в Москве.",
    "We lived in Moscow."
   ],
   [
    "Они вчера посмотрели фильм.",
    "They watched a film yesterday.",
    [
     "Yesterday they watched a film."
    ]
   ],
   [
    "Я закончил работу.",
    "I finished my work."
   ],
   [
    "Он открыл окно.",
    "He opened the window."
   ],
   [
    "Мы играли в футбол.",
    "We played football."
   ],
   [
    "Я вчера ждал автобус.",
    "I waited for the bus yesterday.",
    [
     "Yesterday I waited for the bus."
    ]
   ]
  ]
 },
 {
  "t": "Past Simple: неправильные глаголы и did",
  "tip": "У многих частых глаголов своя форма прошедшего времени: go, went; buy, bought; see, saw; write, wrote. В вопросах и отрицаниях помогает did, а глагол снова в начальной форме: Did you go? I didn't see her.",
  "s": [
   [
    "Я пошёл в магазин.",
    "I went to the shop."
   ],
   [
    "Она купила новую сумку.",
    "She bought a new bag."
   ],
   [
    "Мы видели его вчера.",
    "We saw him yesterday.",
    [
     "Yesterday we saw him."
    ]
   ],
   [
    "Он написал письмо.",
    "He wrote a letter."
   ],
   [
    "Ты ходил в кино вчера?",
    "Did you go to the cinema yesterday?"
   ],
   [
    "Я не видел её.",
    "I didn't see her."
   ],
   [
    "Что ты ел на обед?",
    "What did you eat for lunch?"
   ],
   [
    "Они не пришли на встречу.",
    "They didn't come to the meeting."
   ]
  ]
 },
 {
  "t": "Будущее: will и going to",
  "tip": "Will + глагол: решение в момент речи, обещание, прогноз (I will help you). Be going to + глагол: заранее запланированное или очевидное (We are going to travel). Отрицание: will not (won't).",
  "s": [
   [
    "Завтра я позвоню тебе.",
    "I will call you tomorrow.",
    [
     "Tomorrow I will call you."
    ]
   ],
   [
    "Мы поедем в Лондон летом.",
    "We are going to travel to London in summer."
   ],
   [
    "Она будет работать завтра.",
    "She will work tomorrow.",
    [
     "Tomorrow she will work."
    ]
   ],
   [
    "Я не буду есть мясо.",
    "I will not eat meat."
   ],
   [
    "Что ты будешь делать завтра?",
    "What are you going to do tomorrow?"
   ],
   [
    "Они приедут в пятницу.",
    "They will arrive on Friday.",
    [
     "On Friday they will arrive."
    ]
   ],
   [
    "Я помогу тебе.",
    "I will help you."
   ],
   [
    "Скоро пойдёт дождь.",
    "It is going to rain soon.",
    [
     "Soon it is going to rain."
    ]
   ]
  ]
 },
 {
  "t": "Предлоги и some / any",
  "tip": "Предлоги места: on (на), in (в), near (рядом с), under (под). Времени: at (в час), on (в день), in (в месяц, год). Some — в утверждениях, any — в вопросах и отрицаниях: I have some money. Do you have any questions?",
  "s": [
   [
    "Книга лежит на столе.",
    "The book is on the table."
   ],
   [
    "Я живу рядом с парком.",
    "I live near the park."
   ],
   [
    "Мы встретимся в пять часов.",
    "We will meet at five o'clock."
   ],
   [
    "У меня есть немного денег.",
    "I have some money."
   ],
   [
    "У тебя есть вопросы?",
    "Do you have any questions?"
   ],
   [
    "У меня нет времени.",
    "I don't have any time."
   ],
   [
    "Она ходит в школу пешком.",
    "She goes to school on foot."
   ],
   [
    "Мы приехали из Москвы.",
    "We came from Moscow."
   ]
  ]
 },
 {
  "t": "Сравнения: больше, лучше, самый",
  "tip": "Короткие прилагательные: +er и than (bigger than), самый: the +est (the tallest). Длинные: more … than (more interesting), the most … (the most expensive). Исключения: good, better, the best.",
  "s": [
   [
    "Мой дом больше, чем твой.",
    "My house is bigger than yours."
   ],
   [
    "Эта книга интереснее той.",
    "This book is more interesting than that one."
   ],
   [
    "Сегодня холоднее, чем вчера.",
    "It is colder today than yesterday.",
    [
     "Today it is colder than yesterday."
    ]
   ],
   [
    "Он самый высокий в классе.",
    "He is the tallest in the class."
   ],
   [
    "Это лучший фильм.",
    "This is the best film."
   ],
   [
    "Она говорит быстрее меня.",
    "She speaks faster than me."
   ],
   [
    "Эта дорога опаснее, чем та.",
    "This road is more dangerous than that one."
   ],
   [
    "Это самый дорогой билет.",
    "This is the most expensive ticket."
   ]
  ]
 },
 {
  "t": "Present Perfect: опыт и результат",
  "tip": "Have/has + третья форма глагола (done, been, seen) связывает прошлое с настоящим: опыт (I have been to London), результат (I have lost my keys). Частые слова: already, never, ever, just, yet.",
  "s": [
   [
    "Я уже сделал домашнее задание.",
    "I have already done my homework.",
    [
     "I have done my homework already."
    ]
   ],
   [
    "Она никогда не была в Лондоне.",
    "She has never been to London."
   ],
   [
    "Мы потеряли ключи.",
    "We have lost our keys."
   ],
   [
    "Ты когда-нибудь ел суши?",
    "Have you ever eaten sushi?"
   ],
   [
    "Он только что пришёл домой.",
    "He has just come home."
   ],
   [
    "Я не видел этот фильм.",
    "I haven't seen this film."
   ],
   [
    "Они уже закончили работу.",
    "They have already finished the work."
   ],
   [
    "Мы давно знаем друг друга.",
    "We have known each other for a long time."
   ]
  ]
 }
];

/* ================= Хранилище ================= */
var K = 'lingo-site:v1', mem = {};
function load(){ try{ var r = localStorage.getItem(K); return r ? JSON.parse(r) : {}; }catch(e){ return mem; } }
var S = load();
S.box = S.box || {}; S.custom = S.custom || {}; S.days = S.days || {}; S.lang = LANGS[S.lang] ? S.lang : 'en'; S.streak = S.streak || 0;
S.level = LEVELS.indexOf(S.level) >= 0 ? S.level : 'A2'; S.lessons = S.lessons || {};
function save(){ mem = S; try{ localStorage.setItem(K, JSON.stringify(S)); }catch(e){} if(API) queueSync(); }

/* ---- База данных: если запущен server.js, данные хранятся в SQLite, иначе в браузере ---- */
var API = false, syncTimer = null;
function fixState(s){
  s = s && typeof s === 'object' ? s : {};
  s.box = s.box || {}; s.custom = s.custom || {}; s.days = s.days || {};
  s.lang = LANGS[s.lang] ? s.lang : 'en'; s.streak = s.streak || 0;
  s.level = LEVELS.indexOf(s.level) >= 0 ? s.level : 'A2'; s.lessons = s.lessons || {};
  return s;
}
function isEmptyState(s){ return !s || (!Object.keys(s.box||{}).length && !Object.keys(s.custom||{}).length && !Object.keys(s.days||{}).length && !Object.keys(s.lessons||{}).length); }
function queueSync(){ clearTimeout(syncTimer); syncTimer = setTimeout(function(){ pushState(false); }, 300); }
function pushState(keep){
  clearTimeout(syncTimer); syncTimer = null;
  return fetch('/api/state', {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(S), keepalive:!!keep})
    .then(function(r){ if(!r.ok) throw new Error('save failed'); setDbStatus('db'); })
    .catch(function(){ setDbStatus('error'); });
}
function setDbStatus(mode){
  dbMode = mode;
  var el = document.getElementById('dbStatus'); if(!el) return;
  el.textContent = mode === 'db' ? 'Lingo. Прогресс хранится в базе данных SQLite (файл lingo.db).' :
    mode === 'error' ? 'Lingo. Не удалось записать в базу данных. Проверьте, что server.js запущен.' :
    'Lingo. Прогресс хранится в вашем браузере.';
}
var dbMode = 'browser';
function storageNote(){
  return dbMode === 'db' ? 'Данные хранятся в базе данных SQLite на вашем компьютере (файл lingo.db рядом с server.js).' :
    'Данные хранятся в этом браузере. Если очистить данные сайта, прогресс пропадёт. Чтобы хранить их в базе данных, запустите сайт командой node server.js.';
}
async function initApi(){
  if(!/^https?:$/.test(location.protocol)) return;
  try{
    var r = await fetch('/api/state', {headers:{'Accept':'application/json'}});
    if(!r.ok || (r.headers.get('content-type')||'').indexOf('json') < 0) throw new Error('no api');
    var srv = await r.json();
    API = true;
    if(isEmptyState(srv) && !isEmptyState(S)){
      await pushState(false);                 /* перенос прогресса из браузера в базу */
    } else if(!isEmptyState(srv)){
      S = fixState(srv); mem = S;
      try{ localStorage.setItem(K, JSON.stringify(S)); }catch(e){}
    }
    setDbStatus('db');
    renderStreak(); lastPath = null; applyRoute(currentPath());
  }catch(e){ API = false; setDbStatus('browser'); }
}
window.addEventListener('pagehide', function(){ if(API && syncTimer) pushState(true); });
function dayStr(o){ var d = new Date(); d.setDate(d.getDate()+(o||0)); return d.toISOString().slice(0,10); }
function touch(){
  var t = dayStr(0);
  if(S.last !== t){ S.streak = (S.last === dayStr(-1)) ? (S.streak||0)+1 : 1; S.last = t; }
  S.days[t] = (S.days[t]||0) + 1; save(); renderStreak();
}
function renderStreak(){
  var alive = S.last === dayStr(0) || S.last === dayStr(-1);
  $('streak').textContent = 'Серия: ' + (alive ? (S.streak||0) : 0) + ' дн.';
}

/* ================= Утилиты ================= */
function $(id){ return document.getElementById(id); }
function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function shuffle(a){ a = a.slice(); for(var i=a.length-1;i>0;i--){ var j = Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function levelWindow(){ var i = LEVELS.indexOf(S.level); return i <= 0 ? ['A1'] : [LEVELS[i-1], LEVELS[i]]; }
/* words(lang): слова для занятий (для английского: ваш уровень и один ниже). words(lang, true): весь словарь. */
function words(lang, all){
  lang = lang || S.lang;
  var win = (lang === 'en' && !all) ? levelWindow() : null;
  var base = LANGS[lang].words.filter(function(w){ return !win || win.indexOf(w[3]) >= 0; })
    .map(function(w){ return {w:w[0], ru:w[1], tr:w[2], lvl:w[3]||'', key:lang+'|'+w[0], custom:false}; });
  var cus = (S.custom[lang]||[]).map(function(w){ return {w:w.w, ru:w.ru, tr:'', lvl:'', key:lang+'|'+w.w, custom:true}; });
  return base.concat(cus);
}
function boxOf(k){ return S.box[k] || 0; }
function learnedCount(lang){ return words(lang, true).filter(function(w){ return boxOf(w.key) >= 3; }).length; }
function lv(lang){ var L = LANGS[lang]; return '--lc:'+L.c+';--li:'+L.i+';'; }
function norm(s){
  s = String(s).toLowerCase().trim().replace(/[.,!?¿¡;:'’"“”()。！？，、]/g,'').replace(/\s+/g,' ');
  if(S.lang !== 'ja'){ s = s.normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
  return s;
}
function speak(text, lang){
  try{
    if(!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text); u.lang = LANGS[lang||S.lang].code; u.rate = .9;
    speechSynthesis.speak(u);
  }catch(e){}
}
function plural(n, a, b, c){ var m = n%100, d = n%10; if(m>10 && m<20) return c; if(d===1) return a; if(d>=2 && d<=4) return b; return c; }
var reduced = false;
try{ reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}

/* ================= Роутинг ================= */
var NAV = [['/','Главная','home'],['/languages','Языки','languages'],['/lessons','Уроки','lessons'],['/learn','Тренажёр','learn'],['/words','Словарь','words'],['/tutor','Nexus-Core','tutor'],['/tips','Советы','tips'],['/progress','Прогресс','progress']];
var PAGES = {home:pHome, languages:pLanguages, lessons:pLessons, learn:pLearn, words:pWords, tutor:pTutor, tips:pTips, progress:pProgress};
var TITLES = {home:'Lingo — учите язык по десять минут в день',languages:'Языки — Lingo',lessons:'Уроки — Lingo',learn:'Тренажёр — Lingo',words:'Словарь — Lingo',tutor:'Nexus-Core — ИИ-ассистент',tips:'Советы — Lingo',progress:'Прогресс — Lingo'};
var route = {page:'home'}, lastPath = null, heroTimer = null;

function currentPath(){ var h = ''; try{ h = (location.hash||'').replace(/^#/,''); }catch(e){} return h || '/'; }
function parsePath(p){
  var seg = p.split('/').filter(Boolean);
  var page = seg[0] || 'home';
  if(!PAGES[page]) page = 'home';
  return {page:page, arg:seg[1]||null};
}
function go(path){
  try{ if(currentPath() !== path) location.hash = path; }catch(e){}
  applyRoute(path);
}
function applyRoute(path){
  if(path === lastPath) return;
  lastPath = path;
  if(heroTimer){ clearInterval(heroTimer); heroTimer = null; }
  route = parsePath(path);
  if(route.arg && LANGS[route.arg] && S.lang !== route.arg){ S.lang = route.arg; save(); card = null; quiz = null; wr = null; build = null; }
  renderNav();
  PAGES[route.page]();
  document.title = TITLES[route.page];
  window.scrollTo(0,0);
}
function renderNav(){
  $('nav').innerHTML = NAV.map(function(n){
    var on = n[2] === route.page;
    return '<a href="#'+n[0]+'" data-nav class="'+(on?'on':'')+'"'+(on?' aria-current="page"':'')+'>'+n[1]+'</a>';
  }).join('');
}
window.addEventListener('hashchange', function(){ applyRoute(currentPath()); });

/* ================= Уровень английского ================= */
function levelSeg(){
  return '<div class="seg lvlseg" role="group" aria-label="Уровень английского">'+LEVELS.map(function(l){
    return '<button data-a="level" data-v="'+l+'" class="'+(l===S.level?'on':'')+'" aria-pressed="'+(l===S.level)+'">'+l+'</button>';
  }).join('')+'</div>';
}
function levelNote(){
  var w = levelWindow(), n = words('en').length;
  return '<span class="muted sm">'+LEVEL_INFO[S.level]+'.</span><br><span class="sm">В тренажёре сейчас слова '+(w.length>1?'уровней ':'уровня ')+w.join(' и ')+': '+n+' '+plural(n,'слово','слова','слов')+'.</span>';
}
function paintLevelBox(){
  var el = $('lvlBox'); if(!el) return;
  el.innerHTML = '<div class="lvl-h">Ваш уровень английского</div>'+levelSeg()+'<p style="margin:0">'+levelNote()+'</p>';
}
function levelStrip(){
  if(S.lang !== 'en') return '<p class="muted sm" style="margin:0 0 14px">Уровни пока есть только у английского. Остальные языки начинаются с базовых слов.</p>';
  var idx = LEVELS.indexOf(S.level);
  var cur = LANGS.en.words.filter(function(w){ return w[3] === S.level; });
  var done = cur.filter(function(w){ return boxOf('en|'+w[0]) >= 3; }).length;
  var sug = '';
  if(idx < LEVELS.length-1 && cur.length && done/cur.length >= 0.8){
    sug = '<div class="suggest"><span>Вы выучили '+done+' из '+cur.length+' слов уровня '+S.level+'. Попробуем '+LEVELS[idx+1]+'?</span><button class="btn sm" data-a="levelup">Перейти на '+LEVELS[idx+1]+'</button></div>';
  }
  return '<div class="lvlline"><b class="sm">Уровень английского</b>'+levelSeg()+'</div><p style="margin:0 0 14px">'+levelNote()+'</p>'+sug;
}
function setLevel(l){
  if(LEVELS.indexOf(l) < 0) return;
  S.level = l; save(); card = null; quiz = null; wr = null; build = null;
  if(route.page === 'home') paintLevelBox();
  else if(route.page === 'learn') pLearn();
  else if(route.page === 'words') pWords();
}

/* ================= Главная ================= */
var heroI = 0, heroPaused = false;
function pHome(){
  var rows = KEYS.map(function(k){
    var L = LANGS[k], w = L.words[0];
    return '<a class="lrow" href="#/learn/'+k+'" data-nav style="'+lv(k)+'"><span class="g" lang="'+L.code+'">'+esc(w[0])+'</span>'+
      '<span class="nm-col"><span class="nm">'+L.name+'</span><br><span class="m">'+words(k,true).length+' '+plural(words(k,true).length,'слово','слова','слов')+'</span></span>'+
      '<span class="cnt">выучено '+learnedCount(k)+'</span></a>';
  }).join('');
  $('page').innerHTML =
  '<section class="wrap hero">'+
    '<div><h1>Учите язык по десять минут в день</h1>'+
    '<p class="lead" style="margin:20px 0 22px">Карточки помогают запоминать слова, а Nexus-Core — универсальный ИИ-ассистент — отвечает на вопросы, помогает с кодом и текстами и готовит промпты для изображений.</p>'+
    '<div class="lvlbox" id="lvlBox"></div>'+
    '<div class="row"><a class="btn" href="#/lessons/1" data-nav>Начать с первого урока</a><a class="btn ghost" href="#/languages" data-nav>Выбрать другой язык</a></div></div>'+
    '<div class="hcard" id="hCard" style="'+lv(KEYS[0])+'">'+
      '<div class="top"><span id="hName"></span><span id="hRu"></span></div>'+
      '<div class="word" id="hWord"></div>'+
      '<div class="bot"><div><div class="tr" id="hTr"></div></div>'+
        '<div class="row" style="gap:16px"><div class="pips" id="hPips">'+KEYS.map(function(k,i){ return '<button data-a="hero" data-v="'+i+'" aria-label="'+LANGS[k].name+'"></button>'; }).join('')+'</div>'+
        '<a class="go" id="hGo" href="#/learn/en" data-nav>Учить</a></div></div>'+
    '</div>'+
  '</section>'+
  '<section class="wrap sec"><div class="sec-head"><h2>Восемь языков, один подход</h2><p class="muted">Начните с приветствий и самых частых слов. Добавляйте свои слова в любой язык.</p></div>'+
    '<div class="index">'+rows+'</div></section>'+
  '<section class="wrap sec"><div class="sec-head"><h2>Как это работает</h2></div>'+
    '<div class="steps">'+
      '<div class="step"><div class="n">Шаг 1</div><h3>Выберите язык</h3><p class="muted">Откройте тренажёр и начните с первых слов: приветствия, еда, семья, город.</p></div>'+
      '<div class="step"><div class="n">Шаг 2</div><h3>Повторяйте карточки</h3><p class="muted">Знаете слово: оно вернётся позже. Не знаете: покажется снова уже через пару карточек.</p></div>'+
      '<div class="step"><div class="n">Шаг 3</div><h3>Спросите Nexus-Core</h3><p class="muted">Практикуйте английский или попросите помощи с кодом, идеей, текстом либо другим вопросом.</p></div>'+
    '</div></section>'+
  '<section class="wrap sec"><div class="split"><div><h2 style="margin-bottom:16px">Один помощник для разных задач</h2>'+
    '<p class="lead" style="margin-bottom:24px">Задайте вопрос, попросите написать или разобрать код, улучшить текст или придумать визуальную концепцию. Для работы чата подключите модель ИИ.</p>'+
    '<a class="btn" href="#/tutor" data-nav>Открыть Nexus-Core</a></div>'+
    '<div class="mock" aria-label="Пример диалога"><div class="msg me">Составь промпт для уютной кофейни в скандинавском стиле.</div>'+
      '<div class="msg ai">Конечно! Подготовлю визуальную концепцию и подробный промпт на английском для генератора изображений.</div></div></div></section>';
  heroI = 0; setHero(0, true); paintLevelBox();
  var card = $('hCard');
  card.addEventListener('mouseenter', function(){ heroPaused = true; });
  card.addEventListener('mouseleave', function(){ heroPaused = false; });
  card.addEventListener('focusin', function(){ heroPaused = true; });
  card.addEventListener('focusout', function(){ heroPaused = false; });
  if(!reduced){ heroTimer = setInterval(function(){ if(!heroPaused && !document.hidden) setHero((heroI+1)%KEYS.length); }, 3400); }
}
function setHero(i, instant){
  var card = $('hCard'); if(!card) return;
  var k = KEYS[i], L = LANGS[k], w = L.words[0];
  function apply(){
    heroI = i;
    card.setAttribute('style', lv(k));
    $('hName').textContent = L.name;
    $('hRu').textContent = 'по-русски: ' + w[1];
    var wd = $('hWord'); wd.textContent = w[0]; wd.setAttribute('lang', L.code);
    $('hTr').textContent = w[2] ? '[' + w[2] + ']' : '';
    var g = $('hGo'); g.setAttribute('href', '#/learn/' + k); g.textContent = 'Учить ' + L.name.toLowerCase();
    var pips = $('hPips').children; for(var j=0;j<pips.length;j++){ pips[j].className = j===i ? 'on' : ''; }
  }
  if(instant || reduced){ apply(); return; }
  card.classList.add('out');
  setTimeout(function(){ apply(); card.classList.remove('out'); }, 200);
}

/* ================= Языки ================= */
function pLanguages(){
  $('page').innerHTML =
  '<div class="wrap"><div class="phead"><h1>Языки</h1><p class="lead">Выберите язык и начните с тренажёра. Слова, которые вы повторили три раза подряд, считаются выученными.</p></div>'+
  '<div>'+KEYS.map(function(k){
    var L = LANGS[k], n = words(k,true).length, l = learnedCount(k), pct = n ? Math.round(l/n*100) : 0;
    return '<div class="prow" style="'+lv(k)+'grid-template-columns:minmax(0,1.2fr) minmax(0,1fr) auto;gap:18px;padding:20px 0">'+
      '<div><div class="nm" style="font-size:20px">'+L.name+'</div><div class="muted sm" lang="'+L.code+'">'+esc(L.words[0][0])+(L.words[0][2]?' · '+esc(L.words[0][2]):'')+(k==='en'?' · ваш уровень '+S.level:'')+'</div></div>'+
      '<div><div class="pb"><div style="width:'+pct+'%"></div></div><div class="muted sm" style="margin-top:6px">выучено '+l+' из '+n+'</div></div>'+
      '<div class="row" style="gap:8px;justify-content:flex-end"><a class="btn sm" href="#/learn/'+k+'" data-nav>Тренажёр</a><a class="btn sm ghost" href="#/words/'+k+'" data-nav>Словарь</a></div></div>';
  }).join('')+'</div></div>';
}

/* ================= Тренажёр ================= */
var learnMode = 'cards';
var card = null, flipped = false, quiz = null, wr = null;
function langPills(base){
  return '<div class="pills" role="navigation" aria-label="Язык">'+KEYS.map(function(k){
    return '<a class="pill '+(k===S.lang?'on':'')+'" href="#/'+base+'/'+k+'" data-nav style="'+lv(k)+'"'+(k===S.lang?' aria-current="true"':'')+'><i></i>'+LANGS[k].name+'</a>';
  }).join('')+'</div>';
}
function pLearn(){
  $('page').innerHTML =
  '<div class="wrap"><div class="phead"><h1>Тренажёр</h1><p class="lead">Четыре способа учить слова и предложения. Все ответы влияют на то, как часто они появятся снова.</p></div>'+
  langPills('learn')+levelStrip()+
  '<div class="seg" role="tablist">'+[['cards','Карточки'],['quiz','Тест'],['write','Письмо'],['build','Предложения']].map(function(m){
    return '<button role="tab" aria-selected="'+(m[0]===learnMode)+'" class="'+(m[0]===learnMode?'on':'')+'" data-a="mode" data-v="'+m[0]+'">'+m[1]+'</button>';
  }).join('')+'</div>'+
  '<div class="stage" id="stage" style="'+lv(S.lang)+'"><div class="stage-in" id="stageIn"></div></div></div>';
  drawStage();
}
function drawStage(){
  if(learnMode==='cards') viewCards(); else if(learnMode==='quiz') viewQuiz(); else if(learnMode==='write') viewWrite(); else viewBuild();
}
function stageSet(html){ var el = $('stageIn'); if(el) el.innerHTML = html; }

/* карточки */
function nextCard(){
  var ws = words(); var pool = [];
  ws.forEach(function(w){
    if(card && w.key === card.key && ws.length > 1) return;
    var weight = Math.pow(5 - Math.min(boxOf(w.key),4), 2);
    for(var i=0;i<weight;i++) pool.push(w);
  });
  card = pool[Math.floor(Math.random()*pool.length)];
  flipped = false;
}
function viewCards(){
  if(!card || card.key.split('|')[0] !== S.lang) nextCard();
  var b = boxOf(card.key);
  var lvl = [0,1,2,3,4].map(function(i){ return '<span class="'+(i<b?'f':'')+'"></span>'; }).join('');
  stageSet(
    '<div class="lvl" title="Насколько хорошо вы знаете слово" aria-label="Уровень слова: '+Math.min(b,5)+' из 5">'+lvl+'</div>'+
    '<div class="fc '+(flipped?'flip':'')+'" id="fc"><button class="fc-in" data-a="flip" aria-label="Перевернуть карточку">'+
      '<div class="face front"><div class="big" lang="'+LANGS[S.lang].code+'">'+esc(card.w)+'</div>'+(card.tr?'<div class="tr">['+esc(card.tr)+']</div>':'')+'<div class="hint">нажмите, чтобы увидеть перевод</div></div>'+
      '<div class="face back"><div class="big">'+esc(card.ru)+'</div><div class="tr">'+esc(card.w)+'</div></div>'+
    '</button></div>'+
    '<div class="row" style="margin-bottom:16px"><button class="spk" data-a="speak" aria-label="Озвучить слово">🔊</button></div>'+
    '<div class="row"><button class="btn bad" style="flex:1 1 140px" data-a="dont">Не знаю</button><button class="btn good" style="flex:1 1 140px" data-a="know">Знаю</button></div>');
}

/* тест */
function viewQuiz(){
  var ws = words();
  if(ws.length < 4){ stageSet('<div class="empty">Для теста нужно минимум 4 слова. Добавьте свои в словаре.</div>'); return; }
  if(!quiz || quiz.lang !== S.lang){ quiz = {lang:S.lang, state:'start', dir:'f2r'}; }
  var q = quiz;
  if(q.state === 'start'){
    stageSet('<h3 style="margin-bottom:6px">10 вопросов с выбором ответа</h3><p class="muted" style="margin-bottom:16px">Что показывать в вопросе?</p>'+
      '<div class="seg"><button data-a="qdir" data-v="f2r" class="'+(q.dir==='f2r'?'on':'')+'">Слово</button><button data-a="qdir" data-v="r2f" class="'+(q.dir==='r2f'?'on':'')+'">Перевод</button></div>'+
      '<div><button class="btn" data-a="qstart">Начать тест</button></div>');
  } else if(q.state === 'done'){
    var pct = Math.round(q.score / q.qs.length * 100);
    stageSet('<div class="result"><div class="muted">Ваш результат</div><div class="score">'+q.score+' из '+q.qs.length+'</div>'+
      '<p class="muted" style="margin-bottom:18px">'+(pct>=80?'Отличный результат. Можно добавлять новые слова.':pct>=50?'Хорошо. Ещё один круг карточек закрепит слова.':'Потренируйтесь на карточках и повторите тест.')+'</p>'+
      '<div class="row"><button class="btn" data-a="qstart">Пройти ещё раз</button><button class="btn ghost" data-a="mode" data-v="cards">К карточкам</button></div></div>');
  } else {
    var cur = q.qs[q.i];
    var ask = q.dir==='f2r' ? cur.w : cur.ru;
    stageSet('<div class="bar"><div style="width:'+(q.i/q.qs.length*100)+'%"></div></div>'+
      '<p class="muted sm">Вопрос '+(q.i+1)+' из '+q.qs.length+'</p><div class="big" style="margin:6px 0 18px" '+(q.dir==='f2r'?'lang="'+LANGS[S.lang].code+'"':'')+'>'+esc(ask)+'</div>'+
      cur.opts.map(function(o,i){
        var cls = '';
        if(q.picked !== undefined){ if(o.key===cur.key) cls='ok'; else if(i===q.picked) cls='no'; }
        return '<button class="opt '+cls+'" data-a="qpick" data-v="'+i+'" '+(q.picked!==undefined?'disabled':'')+'>'+esc(q.dir==='f2r'?o.ru:o.w)+'</button>';
      }).join('')+
      (q.picked!==undefined ? '<button class="btn" data-a="qnext" style="margin-top:6px">'+(q.i+1<q.qs.length?'Следующий вопрос':'Показать результат')+'</button>' : ''));
  }
}
function startQuiz(){
  var ws = words(); var sel = shuffle(ws).slice(0, Math.min(10, ws.length));
  quiz.qs = sel.map(function(w){
    var others = shuffle(ws.filter(function(x){ return x.key!==w.key && x.ru!==w.ru && x.w!==w.w; })).slice(0,3);
    return {w:w.w, ru:w.ru, key:w.key, opts:shuffle([w].concat(others))};
  });
  quiz.i = 0; quiz.score = 0; quiz.picked = undefined; quiz.state = 'play';
}

/* письмо */
function newWrite(){
  var ws = words(); var w = ws[Math.floor(Math.random()*ws.length)];
  if(wr && ws.length>1 && w.key===wr.w.key) return newWrite();
  wr = {w:w, fb:null, shown:false};
}
function viewWrite(){
  if(!wr || wr.w.key.split('|')[0] !== S.lang) newWrite();
  stageSet('<p class="muted" style="margin-bottom:6px">Переведите на «'+LANGS[S.lang].name.toLowerCase()+'». Регистр и акценты не важны.</p>'+
    '<div class="big" style="margin-bottom:16px">'+esc(wr.w.ru)+'</div>'+
    '<label class="sm muted" for="wIn" style="display:block;margin-bottom:6px">Ваш ответ</label>'+
    '<input type="text" id="wIn" autocomplete="off" autocapitalize="off" spellcheck="false" '+(wr.fb?'disabled':'')+'>'+
    (wr.fb ? '<div class="fb '+wr.fb+'">'+(wr.fb==='ok'?'Верно.':'Правильный ответ: '+esc(wr.w.w))+(wr.w.tr?' ['+esc(wr.w.tr)+']':'')+'</div>' : '')+
    (wr.shown && !wr.fb ? '<div class="fb info">Подсказка: слово начинается на «'+esc(wr.w.w.slice(0,2))+'»</div>' : '')+
    '<div class="row" style="margin-top:14px">'+
      (wr.fb ? '<button class="btn" data-a="wnext">Следующее слово</button>' :
        '<button class="btn" data-a="wcheck">Проверить</button><button class="btn ghost" data-a="whint">Подсказка</button>')+
    '</div>');
  var inp = $('wIn'); if(inp && !wr.fb) inp.focus();
}
function checkWrite(){
  var v = $('wIn').value; if(!v.trim()) return;
  var ok = norm(v) === norm(wr.w.w);
  wr.fb = ok ? 'ok' : 'no';
  S.box[wr.w.key] = ok ? Math.min(boxOf(wr.w.key)+1, 5) : 0; save(); touch();
  viewWrite(); if(ok) speak(wr.w.w);
}

/* ================= Предложения из блоков ================= */
var build = null;
function isCJK(lang){ return lang === 'zh' || lang === 'ja'; }
function sentList(lang){
  var d = SENT[lang], out = [];
  if(!d) return out;
  if(lang === 'en'){
    levelWindow().forEach(function(l){ (d[l]||[]).forEach(function(s, i){ out.push({id:'s|en|'+l+'|'+i, ru:s[0], t:s[1], alts:s[2]||[], lvl:l}); }); });
  } else {
    d.forEach(function(s, i){ out.push({id:'s|'+lang+'|'+i, ru:s[0], t:s[1], alts:s[2]||[], lvl:''}); });
  }
  return out;
}
function tokenize(t, lang){
  var toks = t.split(' ').filter(Boolean).map(function(x){ return x.replace(/[.,!?。！？，、]+$/, ''); });
  if(!isCJK(lang) && toks.length){
    var f = toks[0];
    if(f !== 'I' && !/^I['’]/.test(f)) toks[0] = f.charAt(0).toLowerCase() + f.slice(1);
  }
  return toks;
}
function joinToks(a, lang){ return a.join(isCJK(lang) ? '' : ' '); }
function fullSentence(t, lang){ return isCJK(lang) ? t.replace(/ /g, '') : t; }
function sentLearned(){
  var n = 0; Object.keys(S.box).forEach(function(k){ if(k.indexOf('s|') === 0 && S.box[k] >= 3) n++; });
  return n;
}
function nextSentence(){
  var list = sentList(S.lang), pool = [];
  list.forEach(function(s){
    if(build && build.item && s.id === build.item.id && list.length > 1) return;
    var w = Math.pow(5 - Math.min(boxOf(s.id), 4), 2);
    for(var i=0;i<w;i++) pool.push(s);
  });
  var item = pool[Math.floor(Math.random()*pool.length)];
  var correct = tokenize(item.t, S.lang), others = [];
  list.forEach(function(s){
    if(s.id === item.id) return;
    tokenize(s.t, S.lang).forEach(function(x){ if(correct.indexOf(x) < 0 && others.indexOf(x) < 0) others.push(x); });
  });
  var nd = 1;
  if(S.lang === 'en'){ nd = (S.level === 'A1') ? 1 : (S.level === 'B2' || S.level === 'C1') ? 3 : 2; }
  var toks = correct.concat(shuffle(others).slice(0, nd)).map(function(x, i){ return {id:'t'+i, txt:x}; });
  build = {lang:S.lang, item:item, toks:toks, pool:shuffle(toks.map(function(t){ return t.id; })), ans:[], fb:null};
}
function tokTxt(id){ for(var i=0;i<build.toks.length;i++){ if(build.toks[i].id === id) return build.toks[i].txt; } return ''; }
function viewBuild(){
  if(!sentList(S.lang).length){ stageSet('<div class="empty">Для этого языка пока нет предложений.</div>'); return; }
  if(!build || build.lang !== S.lang) nextSentence();
  var b = build, code = LANGS[S.lang].code;
  function blk(id, act){ return '<button class="blk" data-a="'+act+'" data-v="'+id+'" lang="'+code+'"'+(b.fb?' disabled':'')+'>'+esc(tokTxt(id))+'</button>'; }
  stageSet(
    '<p class="muted" style="margin-bottom:6px">Составьте предложение'+(b.item.lvl?' · уровень '+b.item.lvl:'')+'</p>'+
    '<div class="big" style="font-size:clamp(20px,4.6vw,28px);margin-bottom:16px">'+esc(b.item.ru)+'</div>'+
    '<div class="ans '+(b.fb||'')+'" role="group" aria-label="Ваш ответ">'+b.ans.map(function(id){ return blk(id, 'bun'); }).join('')+'</div>'+
    '<div class="pool" role="group" aria-label="Слова для предложения">'+b.pool.map(function(id){ return blk(id, 'bpick'); }).join('')+'</div>'+
    (b.fb === 'ok' ? '<div class="fb ok">Верно! '+esc(fullSentence(b.item.t, S.lang))+'</div>' :
     b.fb === 'no' ? '<div class="fb no">Правильный ответ: '+esc(fullSentence(b.item.t, S.lang))+'</div>' : '')+
    '<div class="row" style="margin-top:14px">'+
      (b.fb ? '<button class="btn" data-a="bnext">Следующее предложение</button>' :
        '<button class="btn" data-a="bcheck"'+(b.ans.length?'':' disabled')+'>Проверить</button><button class="btn ghost" data-a="breset">Сбросить</button>')+
    '</div>');
}
function checkBuild(){
  var b = build; if(!b || b.fb || !b.ans.length) return;
  var got = joinToks(b.ans.map(tokTxt), S.lang);
  var ok = [b.item.t].concat(b.item.alts || []).some(function(t){ return norm(joinToks(tokenize(t, S.lang), S.lang)) === norm(got); });
  S.box[b.item.id] = ok ? Math.min(boxOf(b.item.id) + 1, 5) : 0; save(); touch();
  b.fb = ok ? 'ok' : 'no';
  viewBuild();
  if(ok) speak(fullSentence(b.item.t, S.lang));
}

/* ================= Уроки: сборка предложений из блоков ================= */
var lesson = null;
function lessonItems(n){ return LESSONS[n-1].s.map(function(s, i){ return {id:'L'+n+'-'+i, ru:s[0], t:s[1], alts:s[2]||[]}; }); }
function newEx(item, sibs, nd){
  var correct = tokenize(item.t, 'en'), others = [];
  sibs.forEach(function(s){
    if(s.id === item.id) return;
    tokenize(s.t, 'en').forEach(function(x){ if(correct.indexOf(x) < 0 && others.indexOf(x) < 0) others.push(x); });
  });
  var toks = correct.concat(shuffle(others).slice(0, nd)).map(function(x, i){ return {id:'t'+i, txt:x}; });
  return {item:item, toks:toks, pool:shuffle(toks.map(function(t){ return t.id; })), ans:[], fb:null};
}
function exTxt(ex, id){ for(var i=0;i<ex.toks.length;i++){ if(ex.toks[i].id === id) return ex.toks[i].txt; } return ''; }
function startLesson(n){
  var items = lessonItems(n);
  lesson = {n:n, stage:'play', items:items, nd:(n <= 4 ? 0 : n <= 10 ? 1 : 2), queue:items.map(function(x, i){ return i; }), tries:{}, first:0, cur:0, ex:null};
  nextLessonEx();
}
function nextLessonEx(){ lesson.cur = lesson.queue[0]; lesson.ex = newEx(lesson.items[lesson.cur], lesson.items, lesson.nd); }
function checkLesson(){
  var L = lesson, ex = L && L.ex; if(!ex || ex.fb || !ex.ans.length) return;
  var got = ex.ans.map(function(id){ return exTxt(ex, id); }).join(' ');
  var ok = [ex.item.t].concat(ex.item.alts).some(function(t){ return norm(tokenize(t, 'en').join(' ')) === norm(got); });
  ex.fb = ok ? 'ok' : 'no';
  if(ok){ if(!L.tries[L.cur]) L.first++; L.queue.shift(); }
  else { L.tries[L.cur] = true; L.queue.push(L.queue.shift()); }
  touch(); viewLesson();
  if(ok) speak(ex.item.t, 'en');
}
function finishLesson(){
  var L = lesson, pct = Math.round(L.first / L.items.length * 100);
  var prev = (S.lessons[L.n] && S.lessons[L.n].best) || 0;
  S.lessons[L.n] = {best: Math.max(prev, pct)}; save();
  L.stage = 'done'; L.pct = pct; viewLesson();
}
function lessonsDone(){ return Object.keys(S.lessons || {}).length; }
function pLessons(){
  var n = parseInt(route.arg, 10);
  if(n >= 1 && n <= LESSONS.length){
    if(!lesson || lesson.n !== n) lesson = {n:n, stage:'intro'};
    viewLesson(); return;
  }
  lesson = null;
  var nextN = 0;
  for(var i=1;i<=LESSONS.length;i++){ if(!S.lessons[i]){ nextN = i; break; } }
  $('page').innerHTML = '<div class="wrap"><div class="phead"><h1>Уроки английского</h1><p class="lead">16 коротких уроков по шагам. В каждом уроке 8 предложений: вы видите фразу по-русски и собираете перевод из блоков со словами. Ошибки возвращаются в конец урока, пока вы не соберёте всё верно.</p></div>'+
    '<p class="muted" style="margin:0 0 18px">Пройдено уроков: '+lessonsDone()+' из '+LESSONS.length+'</p>'+
    '<div class="index">'+LESSONS.map(function(d, i){
      var k = i + 1, rec = S.lessons[k];
      return '<a class="lsn'+(k===nextN?' next':'')+'" href="#/lessons/'+k+'" data-nav><span class="num">'+k+'</span>'+
        '<span class="lt"><b>'+esc(d.t)+'</b></span>'+
        '<span class="st'+(rec?' done':'')+'">'+(rec ? 'Пройден: '+rec.best+'%' : (k===nextN ? 'Продолжить' : 'Начать'))+'</span></a>';
    }).join('')+'</div></div>';
}
function viewLesson(){
  var L = lesson, d = LESSONS[L.n-1];
  var top = '<div class="wrap"><a class="back" href="#/lessons" data-nav>Все уроки</a><div class="phead" style="padding-bottom:14px"><h1>Урок '+L.n+'. '+esc(d.t)+'</h1></div>';
  var html;
  if(L.stage === 'intro'){
    html = '<div class="stage"><div class="stage-in"><h3 style="margin-bottom:8px">Что нужно знать</h3><p style="margin-bottom:20px">'+esc(d.tip)+'</p>'+
      '<p class="muted" style="margin-bottom:20px">В уроке '+d.s.length+' предложений. Собирайте перевод, нажимая на блоки по порядку.'+(L.n>4?' Среди блоков есть лишние слова.':'')+'</p>'+
      '<button class="btn" data-a="lstart">Начать урок</button></div></div>';
  } else if(L.stage === 'done'){
    var rec = S.lessons[L.n] ? S.lessons[L.n].best : L.pct;
    html = '<div class="stage"><div class="stage-in"><div class="result"><div class="muted">Урок пройден</div><div class="score" style="color:var(--brand)">'+L.first+' из '+L.items.length+'</div>'+
      '<p class="muted" style="margin-bottom:18px">предложений собрано с первого раза ('+L.pct+'%). Лучший результат: '+rec+'%.</p>'+
      '<div class="row">'+(L.n < LESSONS.length ? '<a class="btn" href="#/lessons/'+(L.n+1)+'" data-nav>Следующий урок</a>' : '')+
      '<button class="btn ghost" data-a="lrestart">Пройти ещё раз</button><a class="btn ghost" href="#/lessons" data-nav>Все уроки</a></div></div></div></div>';
  } else {
    var ex = L.ex, total = L.items.length, done = total - L.queue.length;
    function blk(id, act){ return '<button class="blk" data-a="'+act+'" data-v="'+id+'" lang="en"'+(ex.fb?' disabled':'')+'>'+esc(exTxt(ex, id))+'</button>'; }
    html = '<div class="stage"><div class="stage-in">'+
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="'+total+'" aria-valuenow="'+done+'"><div style="width:'+(done/total*100)+'%;background:var(--brand)"></div></div>'+
      '<p class="muted sm" style="margin-bottom:6px">Предложение '+Math.min(done+1, total)+' из '+total+(L.tries[L.cur] ? ' · повтор' : '')+'</p>'+
      '<p class="muted" style="margin-bottom:6px">Переведите на английский:</p>'+
      '<div class="big" style="font-size:clamp(20px,4.6vw,28px);margin-bottom:16px">'+esc(ex.item.ru)+'</div>'+
      '<div class="ans '+(ex.fb||'')+'" role="group" aria-label="Ваш ответ">'+ex.ans.map(function(id){ return blk(id, 'lun'); }).join('')+'</div>'+
      '<div class="pool" role="group" aria-label="Слова для предложения">'+ex.pool.map(function(id){ return blk(id, 'lpick'); }).join('')+'</div>'+
      (ex.fb === 'ok' ? '<div class="fb ok">Верно! '+esc(ex.item.t)+'</div>' : ex.fb === 'no' ? '<div class="fb no">Правильный ответ: '+esc(ex.item.t)+'</div>' : '')+
      '<div class="row" style="margin-top:14px">'+
        (ex.fb ? '<button class="btn" data-a="lnext">'+(L.queue.length ? 'Дальше' : 'Завершить урок')+'</button><button class="spk" data-a="lspeak" aria-label="Прослушать">🔊</button>' :
          '<button class="btn" data-a="lcheck"'+(ex.ans.length ? '' : ' disabled')+'>Проверить</button><button class="btn ghost" data-a="lreset">Сбросить</button>')+
      '</div></div></div>';
  }
  $('page').innerHTML = top + html + '</div>';
}

/* ================= Словарь ================= */
var wFilter = 'all', wQuery = '', wAll = false;
function wordsScope(){
  if(S.lang !== 'en') return '';
  return '<div class="seg" style="margin:0 0 14px"><button data-a="wall" data-v="0" class="'+(!wAll?'on':'')+'">Мой уровень ('+levelWindow().join('–')+')</button><button data-a="wall" data-v="1" class="'+(wAll?'on':'')+'">Все уровни</button></div>';
}
function pWords(){
  $('page').innerHTML =
  '<div class="wrap"><div class="phead"><h1>Словарь</h1><p class="lead">Все слова выбранного языка. Добавляйте свои: они сразу появятся в карточках, тесте и письме.</p></div>'+
  langPills('words')+wordsScope()+
  '<div class="stage" style="'+lv(S.lang)+'">'+
    '<div class="addf"><input type="text" id="nw" placeholder="Слово: '+LANGS[S.lang].name.toLowerCase()+'" aria-label="Слово" autocomplete="off"><input type="text" id="nr" placeholder="Перевод на русский" aria-label="Перевод" autocomplete="off"><button class="btn" data-a="addw">Добавить слово</button></div>'+
    '<div class="sm muted" id="wMsg" style="min-height:22px"></div>'+
    '<div class="tools" style="margin-top:8px"><input type="search" id="wq" placeholder="Поиск по словам" aria-label="Поиск" value="'+esc(wQuery)+'">'+
      '<div class="seg" style="margin:0">'+[['all','Все'],['learning','Учу'],['known','Выучено']].map(function(f){ return '<button data-a="wf" data-v="'+f[0]+'" class="'+(f[0]===wFilter?'on':'')+'">'+f[1]+'</button>'; }).join('')+'</div></div>'+
    '<div class="wl" id="wl"></div></div></div>';
  paintWordList();
}
function paintWordList(){
  var q = wQuery.trim().toLowerCase();
  var ws = words(S.lang, wAll).filter(function(w){
    var b = boxOf(w.key);
    if(wFilter==='learning' && b>=3) return false;
    if(wFilter==='known' && b<3) return false;
    if(q && w.w.toLowerCase().indexOf(q)<0 && w.ru.toLowerCase().indexOf(q)<0) return false;
    return true;
  });
  var el = $('wl'); if(!el) return;
  el.innerHTML = ws.length ? ws.map(function(w){
    var b = boxOf(w.key);
    var dots = [0,1,2,3,4].map(function(i){ return '<i class="'+(i<b?'f':'')+'"></i>'; }).join('');
    return '<div class="w"><button class="spk" style="width:36px;height:36px;font-size:15px" data-a="spkw" data-v="'+esc(w.w)+'" aria-label="Озвучить">🔊</button>'+
      '<div class="t"><b lang="'+LANGS[S.lang].code+'">'+esc(w.w)+(w.lvl?'<span class="tag">'+w.lvl+'</span>':'')+(w.custom?'<span class="tag">моё</span>':'')+'</b><span>'+esc(w.ru)+(w.tr?' · ['+esc(w.tr)+']':'')+'</span></div>'+
      '<div class="dots" title="Уровень слова">'+dots+'</div>'+
      (w.custom?'<button class="x" data-a="delw" data-v="'+esc(w.w)+'" aria-label="Удалить слово '+esc(w.w)+'">✕</button>':'<span style="width:32px"></span>')+'</div>';
  }).join('') : '<div class="empty">Ничего не найдено. Измените поиск или фильтр.</div>';
}

/* ================= ИИ-помощник ================= */
var sampleFn = null, sampleChecked = false;
var turns = [], chatLog = [], ctl = null, busy = false;
function tutorRules(){
  return 'Ты — Nexus-Core, универсальный ИИ-ассистент. Отвечай на языке пользователя; по умолчанию используй русский. '+
  'Будь профессиональным, доброжелательным, уверенным и самостоятельным: сначала решай задачу, а не ограничивайся общими советами. '+
  'На технические запросы предоставляй полный, рабочий и аккуратно оформленный код на подходящем языке, без пропусков и заглушек; поясняй запуск и важные решения. '+
  'Если задача требует нескольких файлов, укажи структуру проекта и содержимое каждого файла. Если ответ не помещается, явно сообщи, что именно осталось, а не выдавай неполный результат за готовый. '+
  'Отвечай на вопросы точно и содержательно; отделяй проверенные факты от предположений и честно обозначай неопределённость. '+
  'Если запрос касается изображения, которого ты не можешь создать напрямую, опиши визуальную концепцию и дай готовый подробный промпт на английском языке в отдельном блоке кода. '+
  'Уточняй детали только тогда, когда без них нельзя надёжно выполнить задачу. Форматируй ответ для удобного чтения и не заявляй о возможностях, которых у тебя нет.';
}
function pTutor(){
  var head = '<div class="phead"><h1>Nexus-Core</h1><p class="lead">Универсальный ИИ-ассистент для вопросов, разработки, текстов и визуальных концепций. Напишите задачу своими словами.</p></div>';
  if(!sampleFn){
    $('page').innerHTML = '<div class="wrap">'+head+
      diagHtml()+
      '<div class="tips">'+TIPS.map(function(t){ return '<details open><summary>'+t[0]+'</summary><p>'+t[1]+'</p></details>'; }).join('')+'</div></div>';
    return;
  }
  $('page').innerHTML = '<div class="wrap">'+head+
  '<div class="tgrid"><div class="chatbox"><div class="chat" id="chat" aria-live="polite"></div>'+
    '<div class="compose"><textarea id="aiIn" rows="1" aria-label="Ваше сообщение" placeholder="Напишите, что нужно сделать или узнать"></textarea>'+
    '<button class="btn" id="aiSend" data-a="aisend">Отправить</button></div></div>'+
  '<aside class="side"><h3>Чем помогу</h3><p class="muted sm" style="margin-bottom:18px">Код и разбор ошибок · понятные объяснения · планы и тексты · промпты для генерации изображений.</p>'+
    '<h3>Быстрый старт</h3><div class="qlist">'+CHIPS.map(function(c,i){ return '<button class="q" data-a="chip" data-v="'+i+'">'+c[0]+'</button>'; }).join('')+'</div>'+
    '<button class="btn ghost sm" data-a="aireset">Очистить чат</button>'+(aiInfo?'<p class="muted sm" style="margin-top:16px">'+esc(aiInfo)+'</p><button class="btn ghost sm" data-a="aitest">Проверить подключение</button><p class="muted sm" id="aiTestOut" style="margin-top:8px"></p>':'')+'</aside></div></div>';
  paintChat();
}
function paintChat(){
  var c = $('chat'); if(!c) return;
  var html = '<div class="msg ai">Привет! Я Nexus-Core. Помогу с вопросами, кодом, текстами и идеями для изображений. Опишите задачу — и я предложу конкретное решение.</div>';
  html += chatLog.map(function(m){ return '<div class="msg '+(m.t.indexOf('Исправление:')===0 && m.r==='ai' ? 'fix' : m.r)+'">'+esc(m.t)+'</div>'; }).join('');
  c.innerHTML = html; c.scrollTop = c.scrollHeight;
}
function errCopy(code, msg){
  if(msg && /[А-Яа-я]/.test(msg) && (code === 'upstream_error' || code === 'rate_limited')) return msg;
  var m = {not_granted:'Доступ к ИИ не разрешён для этой страницы.',sampling_disabled:'ИИ недоступен для вашего аккаунта.',rate_limited:'Слишком много запросов или исчерпан лимит. Попробуйте позже.',
    session_expired:'Нужно заново войти в аккаунт.',refused:'Помощник не смог ответить на это сообщение. Переформулируйте его.',empty_completion:'Ответ пустой. Переформулируйте сообщение.'};
  return m[code] || 'Не удалось получить ответ. Попробуйте ещё раз.';
}
async function sendAI(text){
  if(busy || !sampleFn) return;
  text = (text||'').trim(); if(!text) return;
  busy = true; touch();
  chatLog.push({r:'me', t:text}); chatLog.push({r:'ai', t:'Думаю…'});
  turns.push({role:'user', content:text});
  paintChat();
  var btn = $('aiSend'); if(btn){ btn.textContent = 'Стоп'; btn.setAttribute('data-a','aistop'); }
  ctl = new AbortController();
  var idx = chatLog.length-1;
  try{
    var hist = turns.slice(-20);
    if(hist[0].role !== 'user') hist = hist.slice(1);
    var res = await sampleFn([{role:'user', content:tutorRules()}].concat(hist), {
      cache:false, signal:ctl.signal, modelTier:'quick',
      onText:function(o){ chatLog[idx].t = o.text; paintChat(); }
    });
    chatLog[idx].t = res.text; turns.push({role:'assistant', content:res.text});
  }catch(e){
    if(e && e.text){ chatLog[idx].t = e.text; turns.push({role:'assistant', content:e.text}); }
    else { chatLog.splice(idx,1); turns.pop(); }
    if(!e || e.code !== 'cancelled'){ chatLog.push({r:'sys', t:errCopy(e && e.code, e && e.message)}); }
  }
  busy = false; ctl = null;
  var b2 = $('aiSend'); if(b2){ b2.textContent = 'Отправить'; b2.setAttribute('data-a','aisend'); }
  paintChat();
}

/* ================= Советы ================= */
function pTips(){
  $('page').innerHTML = '<div class="wrap"><div class="phead"><h1>Советы по изучению языков</h1><p class="lead">Шесть привычек, которые помогают запоминать слова надолго. Нажмите на заголовок, чтобы прочитать.</p></div>'+
    '<div class="tips">'+TIPS.map(function(t,i){ return '<details'+(i===0?' open':'')+'><summary>'+t[0]+'</summary><p>'+t[1]+'</p></details>'; }).join('')+'</div>'+
    '<div class="row" style="margin-top:34px"><a class="btn" href="#/learn" data-nav>Перейти к тренажёру</a><a class="btn ghost" href="#/tutor" data-nav>Спросить помощника</a></div></div>';
}

/* ================= Прогресс ================= */
var resetAsk = false;
function pProgress(){
  var total = 0, learned = 0;
  KEYS.forEach(function(k){ total += words(k,true).length; learned += learnedCount(k); });
  var today = S.days[dayStr(0)] || 0;
  var alive = S.last === dayStr(0) || S.last === dayStr(-1);
  var cells = '';
  for(var i=34;i>=0;i--){
    var d = dayStr(-i), n = S.days[d] || 0;
    var lvl = n===0 ? '' : n<5 ? 'l1' : n<15 ? 'l2' : n<30 ? 'l3' : 'l4';
    cells += '<i class="'+lvl+(i===0?' today':'')+'" title="'+d+': '+n+' '+plural(n,'ответ','ответа','ответов')+'"></i>';
  }
  $('page').innerHTML = '<div class="wrap"><div class="phead"><h1>Прогресс</h1><p class="lead">'+storageNote()+'</p></div>'+
    '<div class="figs"><div class="fig"><div class="v">'+(alive?(S.streak||0):0)+'</div><div class="l">дней подряд</div></div>'+
      '<div class="fig"><div class="v">'+learned+'</div><div class="l">выучено из '+total+'</div></div>'+
      '<div class="fig"><div class="v">'+today+'</div><div class="l">упражнений сегодня</div></div></div>'+
    '<p class="muted" style="margin:-12px 0 28px">Пройдено уроков: '+lessonsDone()+' из '+LESSONS.length+'. Выучено предложений в тренажёре: '+sentLearned()+'.</p>'+
    '<h2 style="margin-bottom:8px;font-size:24px">По языкам</h2>'+
    KEYS.map(function(k){
      var n = words(k,true).length, l = learnedCount(k);
      return '<div class="prow" style="'+lv(k)+'"><span class="nm">'+LANGS[k].name+'</span><div class="pb"><div style="width:'+(n?l/n*100:0)+'%"></div></div><span class="c">'+l+' / '+n+'</span></div>';
    }).join('')+
    '<h2 style="margin:38px 0 6px;font-size:24px">Последние 5 недель</h2><p class="muted sm" style="margin-bottom:14px">Чем темнее клетка, тем больше упражнений в этот день. Сегодня обведено.</p>'+
    '<div class="heat" role="img" aria-label="Календарь занятий за 35 дней">'+cells+'</div>'+
    '<div style="margin-top:40px">'+(resetAsk ?
      '<p style="margin-bottom:10px;font-weight:600">Удалить весь прогресс и свои слова? Это действие нельзя отменить.</p><div class="row"><button class="btn bad sm" data-a="resetyes">Да, удалить всё</button><button class="btn ghost sm" data-a="resetno">Отмена</button></div>' :
      '<button class="btn ghost sm" data-a="resetask">Сбросить прогресс</button>')+'</div></div>';
}

/* ================= События ================= */
document.addEventListener('click', function(e){
  var link = e.target.closest('a[data-nav]');
  if(link){
    var href = link.getAttribute('href') || '';
    if(href.charAt(0) === '#'){ e.preventDefault(); go(href.slice(1) || '/'); return; }
  }
  var el = e.target.closest('[data-a]'); if(!el) return;
  var a = el.getAttribute('data-a'), v = el.getAttribute('data-v');
  if(a==='hero'){ setHero(+v); }
  else if(a==='level'){ setLevel(v); }
  else if(a==='levelup'){ setLevel(LEVELS[Math.min(LEVELS.indexOf(S.level)+1, LEVELS.length-1)]); }
  else if(a==='wall'){ wAll = v === '1'; pWords(); }
  else if(a==='mode'){ learnMode = v; if(route.page !== 'learn'){ go('/learn'); } else { pLearn(); } }
  else if(a==='flip'){ flipped = !flipped; $('fc').classList.toggle('flip', flipped); if(flipped) speak(card.w); }
  else if(a==='speak'){ speak(card.w); }
  else if(a==='know' || a==='dont'){
    S.box[card.key] = a==='know' ? Math.min(boxOf(card.key)+1, 5) : 0; save(); touch(); nextCard(); viewCards();
  }
  else if(a==='qdir'){ quiz.dir = v; viewQuiz(); }
  else if(a==='qstart'){ if(!quiz) quiz = {lang:S.lang, dir:'f2r'}; startQuiz(); viewQuiz(); }
  else if(a==='qpick'){
    var q = quiz, cur = q.qs[q.i]; if(q.picked !== undefined) return;
    q.picked = +v; var ok = cur.opts[q.picked].key === cur.key; if(ok) q.score++;
    S.box[cur.key] = ok ? Math.min(boxOf(cur.key)+1, 5) : 0; save(); touch(); viewQuiz();
  }
  else if(a==='qnext'){ quiz.i++; quiz.picked = undefined; if(quiz.i >= quiz.qs.length) quiz.state = 'done'; viewQuiz(); }
  else if(a==='wcheck'){ checkWrite(); }
  else if(a==='bpick' || a==='bun'){
    if(!build || build.fb) return;
    var from = a === 'bpick' ? build.pool : build.ans, to = a === 'bpick' ? build.ans : build.pool, ix = from.indexOf(v);
    if(ix >= 0){ from.splice(ix, 1); to.push(v); }
    viewBuild();
  }
  else if(a==='bcheck'){ checkBuild(); }
  else if(a==='lstart'){ startLesson(lesson.n); viewLesson(); }
  else if(a==='lrestart'){ startLesson(lesson.n); viewLesson(); window.scrollTo(0,0); }
  else if(a==='lpick' || a==='lun'){
    var ex = lesson && lesson.ex; if(!ex || ex.fb) return;
    var f2 = a === 'lpick' ? ex.pool : ex.ans, t2 = a === 'lpick' ? ex.ans : ex.pool, i2 = f2.indexOf(v);
    if(i2 >= 0){ f2.splice(i2, 1); t2.push(v); }
    viewLesson();
  }
  else if(a==='lcheck'){ checkLesson(); }
  else if(a==='lreset'){ var e3 = lesson && lesson.ex; if(e3 && !e3.fb){ e3.pool = e3.pool.concat(e3.ans); e3.ans = []; viewLesson(); } }
  else if(a==='lnext'){ if(lesson.queue.length){ nextLessonEx(); viewLesson(); } else finishLesson(); }
  else if(a==='lspeak'){ speak(lesson.ex.item.t, 'en'); }
  else if(a==='breset'){ if(build && !build.fb){ build.pool = build.pool.concat(build.ans); build.ans = []; viewBuild(); } }
  else if(a==='bnext'){ nextSentence(); viewBuild(); }
  else if(a==='whint'){ var v0 = $('wIn').value; wr.shown = true; viewWrite(); $('wIn').value = v0; }
  else if(a==='wnext'){ newWrite(); viewWrite(); }
  else if(a==='spkw'){ speak(v); }
  else if(a==='wf'){ wFilter = v; pWords(); }
  else if(a==='addw'){
    var w = $('nw').value.trim(), r = $('nr').value.trim(), msg = $('wMsg');
    if(!w || !r){ msg.textContent = 'Заполните оба поля: слово и перевод.'; return; }
    if(words(S.lang,true).some(function(x){ return x.w.toLowerCase() === w.toLowerCase(); })){ msg.textContent = 'Это слово уже есть в словаре.'; return; }
    S.custom[S.lang] = S.custom[S.lang] || [];
    S.custom[S.lang].push({w:w, ru:r}); save(); pWords(); $('wMsg').textContent = 'Слово «'+w+'» добавлено.'; $('nw').focus();
  }
  else if(a==='delw'){
    S.custom[S.lang] = (S.custom[S.lang]||[]).filter(function(x){ return x.w !== v; }); delete S.box[S.lang+'|'+v];
    save(); card = null; wr = null; quiz = null; paintWordList();
  }
  else if(a==='chip'){
    var c = CHIPS[+v];
    if(c[1].slice(-2) === ': '){ var t = $('aiIn'); t.value = c[1]; t.focus(); } else sendAI(c[1]);
  }
  else if(a==='aisend'){ var ta = $('aiIn'); var txt = ta.value; ta.value = ''; sendAI(txt); }
  else if(a==='aistop'){ if(ctl) ctl.abort(); }
  else if(a==='aitest'){ runAiTest(); }
  else if(a==='aicheck'){
    sampleChecked = false; pTutor();
    (async function(){ if(!sampleFn) sampleFn = await detectServerAI(); sampleChecked = true; if(route.page === 'tutor') pTutor(); })();
  }
  else if(a==='aireset'){ if(ctl) ctl.abort(); turns = []; chatLog = []; paintChat(); }
  else if(a==='resetask'){ resetAsk = true; pProgress(); }
  else if(a==='resetno'){ resetAsk = false; pProgress(); }
  else if(a==='resetyes'){ S = {box:{}, custom:{}, days:{}, lessons:{}, lang:S.lang, level:S.level, streak:0}; save(); card = null; quiz = null; wr = null; build = null; resetAsk = false; renderStreak(); pProgress(); }
});
document.addEventListener('keydown', function(e){
  var id = e.target.id;
  if(id === 'wIn' && e.key === 'Enter'){ e.preventDefault(); if(wr && wr.fb){ newWrite(); viewWrite(); } else checkWrite(); }
  if(id === 'aiIn' && e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); var t = e.target.value; e.target.value=''; sendAI(t); }
  if((id === 'nw' || id === 'nr') && e.key === 'Enter'){ e.preventDefault(); var b = document.querySelector('[data-a="addw"]'); if(b) b.click(); }
});
document.addEventListener('input', function(e){ if(e.target.id === 'wq'){ wQuery = e.target.value; paintWordList(); } });
document.addEventListener('change', function(e){ if(e.target.id === 'lvl'){ setLevel(e.target.value); } });
$('themeBtn').addEventListener('click', function(){
  var r = document.documentElement, cur = r.getAttribute('data-theme');
  var dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  r.setAttribute('data-theme', dark ? 'light' : 'dark');
});

renderStreak();
applyRoute(currentPath());
initApi();

/* ---- ИИ: внутри Claude или через server.js (Ollama / Anthropic API) ---- */
var aiInfo = '', aiHint = '', aiDiag = {server:false, inClaude:false, claudeErr:''};
function diagHtml(){
  if(!sampleChecked) return '<div class="note">Подключаем помощника…</div>';
  var items = [];
  if(aiDiag.inClaude){ items.push([false, 'Внутри Claude чат не получил разрешения на ИИ' + (aiDiag.claudeErr ? ' (' + esc(aiDiag.claudeErr) + ')' : '') + '.']); }
  if(aiDiag.server){ items.push([true, 'Сервер server.js найден.']); items.push([false, esc(aiHint || 'ИИ не настроен.') + ' После настройки перезапустите server.js и нажмите «Проверить снова».']); }
  else { items.push([false, 'Сервер server.js не найден. Страница открыта по адресу ' + esc(location.href.split('#')[0]) + '. Для чата нужен адрес http://localhost:3000: выполните команду node server.js в папке сайта и откройте этот адрес. Двойной щелчок по index.html и Live Server для чата не подходят.']); }
  return '<div class="diag"><h3>Почему чат пока не работает</h3><ul>' + items.map(function(i){ return '<li class="' + (i[0] ? 'ok' : 'bad') + '">' + i[1] + '</li>'; }).join('') + '</ul><button class="btn sm" data-a="aicheck">Проверить снова</button></div>';
}
async function runAiTest(){
  var out = $('aiTestOut'); if(!out) return;
  out.textContent = 'Проверяем… Первый запуск локальной модели может занять до минуты.';
  try{
    var r = await fetch('/api/ai/test', {method:'POST', headers:{'Content-Type':'application/json'}, body:'{}'});
    var j = await r.json();
    out.textContent = j.ok ? 'Подключение работает. Ответ модели: ' + j.reply : 'Ошибка: ' + (j.error || 'неизвестно') + (j.detail ? ' (' + String(j.detail).slice(0,160) + ')' : '');
  }catch(e){ out.textContent = 'Не удалось связаться с сервером.'; }
}
async function serverAI(input, opts){
  opts = opts || {};
  var system = '', messages;
  if(typeof input === 'string'){ messages = [{role:'user', content:input}]; }
  else { system = input[0].content; messages = input.slice(1); }
  var resp;
  try{
    resp = await fetch('/api/chat', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({system:system, messages:messages}), signal:opts.signal});
  }catch(e){
    if(e && e.name === 'AbortError') throw {code:'cancelled', message:'cancelled'};
    throw {code:'upstream_error', message:'Не удалось связаться с сервером. Проверьте, что server.js запущен.'};
  }
  if(!resp.ok){
    var m = ''; try{ m = (await resp.json()).error; }catch(e){}
    throw {code: resp.status === 429 ? 'rate_limited' : 'upstream_error', message: m || ('Ошибка сервера ' + resp.status)};
  }
  var reader = resp.body.getReader(), dec = new TextDecoder(), text = '';
  try{
    while(true){
      var r = await reader.read(); if(r.done) break;
      var d = dec.decode(r.value, {stream:true}); text += d;
      if(opts.onText) opts.onText({text:text, delta:d});
    }
  }catch(e){
    if(e && e.name === 'AbortError') throw {code:'cancelled', message:'cancelled', text:text || undefined};
    throw {code:'upstream_error', message:'Соединение прервано.', text:text || undefined};
  }
  if(!text.trim()) throw {code:'empty_completion', message:'empty'};
  return {text:text, truncated:false};
}
async function detectServerAI(){
  if(!/^https?:$/.test(location.protocol)) return null;
  try{
    var r = await fetch('/api/ai/status', {headers:{'Accept':'application/json'}});
    if(!r.ok || (r.headers.get('content-type')||'').indexOf('json') < 0) return null;
    var s = await r.json();
    aiDiag.server = true;
    if(s.ready){
      var pn = s.provider === 'ollama' ? 'Ollama' : s.provider === 'anthropic' ? 'Anthropic API' : 'API-сервис';
      aiInfo = 'Работает через ' + pn + ' (' + s.model + ').' + (s.provider === 'ollama' ? ' Первый ответ может занять до минуты: модель загружается в память.' : '');
      aiHint = ''; return serverAI;
    }
    aiHint = s.hint || '';
  }catch(e){}
  return null;
}
(async function(){
  try{
    if(window.claude && typeof window.claude.use === 'function'){ aiDiag.inClaude = true; sampleFn = await window.claude.use('sample'); }
  }catch(e){ sampleFn = null; aiDiag.claudeErr = (e && (e.code || e.message)) || ''; }
  if(!sampleFn){ sampleFn = await detectServerAI(); }
  sampleChecked = true;
  if(route.page === 'tutor' && !busy) pTutor();
})();
