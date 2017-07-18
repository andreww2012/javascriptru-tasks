// AJAX и COMET
// Раздел на сайте: https://learn.javascript.ru/ajax

// 1. Введение в AJAX и COMET: https://learn.javascript.ru/ajax-intro
// * AJAX («Asynchronous Javascript And Xml») – технология обращения к серверу
// без перезагрузки страницы.
// * COMET – общий термин, описывающий различные техники получения данных по
// инициативе сервера. Примеры COMET-приложений: чат, аукцион, интерфейс
// (совместного) редактирования.
// * Библиотеки/фреймворки, добавляющие удобства: Socket.io, CometD.

// 2. Node.JS для решения задач: https://learn.javascript.ru/ajax-nodejs
// В статье приводится краткая инструкция по установке/настройке NodeJS/npm
// и приводится пример создания простого сервера (см. example-server.js)

// 3. Основы XMLHttpRequest: https://learn.javascript.ru/ajax-xmlhttprequest
// * Как правило, объект XMLHttpRequest используют для загрузки данных.
let xhr = new XMLHttpRequest();
// Параметры open: тип, путь, асинхронно?, логин/пароль для HTTP-авторизации
xhr.open("POST", "phones.json", false); // настраивает запрос, но не откр. соед.
// Установка заголовков (не все заголовки можно уст. в целях безопасности).
// Также заг-к нельзя снять, повторные вызовы лишь добавляют информацию к нему.
xhr.setRequestHeader("Content-Type", "application/json");
xhr.timeout = 3000; // макс. продолжительность асинхр. запроса
xhr.send("тело-запроса"); // тело указ., если есть(напр, его нет в GET-запросах)
xhr.abort(); // прерывает выполнение запроса
xhr.onreadystatechange = () => { xhr.readyState; }; // см. описание ниже
xhr.ontimeout = () => {  }; // возникает при превышении timeout
xhr.onloadstart = () => {  }; // запрос начат
xhr.onprogress = () => {  }; // получен очередной пакет данных
xhr.onabort = () => {  }; // запрос был отменён
xhr.onerror = () => {  }; // произошла ошибка
xhr.onload = () => {  }; // запрос был завершён без ошибок
xhr.onloadend = () => {  }; // запрос был завершён (неважно как)
xhr.status; xhr.statusText; // код ответа сервера + его описание
xhr.responseText; // текст ответа
xhr.responseXML; // если ответ в XML-формате, то это XML-документ (исп. редко)
xhr.getResponseHeader("Content-Type"); // не возвр. Set-Cookie, Set-Cookie2
xhr.getAllResponseHeaders(); // возвр. всё кроме Set-Cookie/..2 в виде строки(!)
// * Синхр. запросы исп. очень редко (блокируется взаимодействие со страницей).
// Если синхр. вызов занял много времени, то браузер предложит закрыть страницу.
// * Соб. readystatechange происх. неск. раз в процессе отсылки и получ. ответа.
// Св-во readyState содержит текущее состояние запроса:
// const unsigned short UNSENT = 0;  начальное состояние
// const unsigned short OPENED = 1;  вызван open
// const ... HEADERS_RECEIVED = 2;   получены заголовки
// const unsigned short LOADING = 3; загруж.тело(получен очередной пакет данных)
// const unsigned short = 4;         запрос завершён
// Запрос проходит их в порядке 0 → 1 → 2 → 3 → … → 3 → 4.
// См. в example-xmlhttprequest.js пример типичного XMLHttpRequest запроса.

// 4. XMLHttpRequest POST, формы и кодировка:
// http://learn.javascript.ru/xhr-forms
// 1) Отправка GET-запросов
// * Во время отправки формы <form> браузер собирает значения её полей, делает
// из них строку и составляет тело GET/POST-запроса для посылки на сервер.
// (!) При отправке данных через XMLHttpRequest это нужно делать самим в JS-коде
// * urlencoded - основной способ кодировки: все символы, кроме англ. букв, цифр
// и -_.!~*'() заменяются на их цифровой код в UTF-8 со знаком %. Спец. ф-я:
encodeURIComponent("Виктор"); // %D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80
// * (!) При использовании XMLHttpRequest браузер автоматически добавит к
// запросу важнейшие HTTP-заголовки, такие как Content-Length и Connection.
// * Также можно сообщить серверу, что запрос отправляется через AJAX:
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
// 2) Отправка POST-запросов
// * В формах для POST-запр. доступны 3 осн. кодировки, задаваемые через атрибут
// enctype: application/x-www-form-urlencoded, multipart/form-data, text-plain
// * В XHR мы не обязаны исп. ни один их этих способов, но проще всё-таки исп.:
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// * Кодировка multipart/form-data обычно исп. для пересылки файлов. В этой
// кодир. поля пересылаются через спец. строку-разделитель (boundary). Так,
// сервер видит заголовок Content-Type: multipart/form-data, читает из него
// boundary - случайно сгенерированную строку, и раскодирует поля формы.
// * Сделать запрос в этой кодировке можно и в XHR. Надо указать в заголовке
// Content-Type кодировку и границу и далее сформировать тело запроса,
// удовлетворяющее требованиям кодировки. Пример см. в статье.
// * Можно созд. запрос, который сервер воспримет как загрузку файла. См. статью
// 3) FormData - объект, который кодирует формы для отправки на сервер. Пример:
let formData = new FormData(document.forms.person); // можно вызвать без арг-ов
formData.append("patronym", "Робертович");
let xhr = new XMLHttpRequest();
xhr.open("POST", "/url");
xhr.send(formData); // (!) Кодировка будет multipart/form-data
// 4) XHR не огранич. кодировку и формат пересылаемых данных, часто исп. JSON:
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

// 5. XMLHttpRequest: кросс-доменные запросы (не подд. IE9-):
// http://learn.javascript.ru/xhr-crossdomain
// * Для поддержки кросс-доменных запросов в IE9- нужно исп. XDomainRequest:
let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
let xhr = new XHR(); // подробнее об особенностях XDomainRequest в статье.
// * (!) Кросс-доменный запрос обязательно должен быть асинхронным:
xhr.open("GET", "http://anywhere.com/request", true);
// * На КД запросы специф-я CORS налагает огранич. Она делит запросы на 2 вида:
// - Простые: используют простые методы (GET, POST, HEAD), простые заголовки
// (Accept, Accept-Language, Content-Language, Content-Type с 3 зн-ями выше).
// - Непростые: все остальные. Для их выполнения нужно согласие сервера.
// * В КД запросы браузер доб. заголовок Origin - домен, с кот. осуществ. запр.
// Если получен загол. Access-Control-Allow-Origin=домен запроса или * => сервер
// разрешил КД запрос с данного домена: https://vk.cc/6TwRak
// Access-Control-Expose-Headers=<список загол.> => доступ js к указ. заголовкам
// (по умолч. скрипт может прочитать из ответа только «простые» заголовки:
// Cache-Control, Content-Language, Content-Type, Expires, Last-Modified,Pragma)
// * Указать браузеру передать вместе с запросом куки и HTTP-авторизацию:
xhr.withCredentials = true; // Для такого запроса сервер должен вернуть
// Access-Control-Allow-Origin: <домен>, Access-Control-Allow-Credentials: true
// * Если запрос - непростой, браузеры используют предзапрос (preflight):
// - Такой запрос исп. метод OPTIONS (илл.: https://vk.cc/6Tx3yP)
// - В Access-Control-Request-Method он указывает название желаемого метода,
// в Access-Control-Request-Headers - список добавленных особых заголовков.
// - При разрешении сервера он возвр. ответ без тела со статусом 200 и Access
// -Control-Allow-Method: метод, Access-Control-Allow-Headers: разреш.заголовки,
// может указать Access-Control-Max-Age: sec (кол-во сек. на разрешение)
// * Также, названия нестандартных заголовков ответа сервер должен указать в
// Access-Control-Expose-Headers, если хочет, чтобы клиент мог их прочитать.

// 6. XMLHttpRequest: индикация прогресса:
// http://learn.javascript.ru/xhr-onprogress
// * Запрос XMLHttpRequest состоит из двух фаз:
// - Стадия закачки (upload) - загрузка данных на сервер, событие xhr.upload
// - Стадия скачивания (download) - скачивание ответа с сервера, xhr.onprogress.
// 1) Стадия закачки: объект xhr.upload генерирует события в процессе закачки:
// loadstart, progress, abort, error, load, timeout, loadend.
// 2) Стадия скачивания:на этой стадии используются обработчики событий на объ.
// xhr (пример: xhr.onprogress содержит инф. о кол-ве принятых байт ответа)
// * Событие onprogress имеет с-ва:
// - loaded – кол-во уже пересланных данных в байтах (только тело, без загол-в)
// - lengthComputable - если true, то известно total
// - total – общее количество данных дл пересылки.
// Важные особенности события:
// - Событие происходит при каждом полученном/отправленном байте, но не чаще
// чем раз в 50 мс.
// - В процессе получения данных, ещё до их полной передачи, доступен
// xhr.responseText, но он не обязательно содержит корректную строку.
// - Сработавшее событие xhr.upload.onprogress не гарантирует, что данные дошли.
xhr.upload.onprogress = (e) => {alert("Загружено " + e.loaded + "/" + e.total);}
xhr.onprogress = (e) => {alert("Получ. с сервера" + e.loaded + "/" + e.total);}

// 7. XMLHttpRequest: возобновляемая закачка:
// http://learn.javascript.ru/xhr-resume
// *

// 8. COMET с XMLHttpRequest: длинные опросы:
// http://learn.javascript.ru/xhr-longpoll
// * COMET - непрерывное получения данных с сервера. Способы реализации:
// - Частые опросы: постоянная отсылка запросов на сервер (напр., каждые 10 с).
// Недостатки: задержки между событием и уведомлением, лишний трафик на сервер.
// - Длинные опросы, схема: https://vk.cc/6Ty0x2. Если соединение рвётся само,
// например, из-за ошибки в сети, то браузер тут же отсылает новый запрос.
// Пример реализации в статье.
// * Длинные опросы отлично работают в случаях, когда сообщения приходят редко.

// 9. WebSocket: http://learn.javascript.ru/websockets
// *

// 10. Протокол JSONP: http://learn.javascript.ru/ajax-jsonp
// *

// 11. Server Side Events - события с сервера:
// http://learn.javascript.ru/server-sent-events
// *

// 12. IFRAME для AJAX и COMET: http://learn.javascript.ru/ajax-iframe
// *

// 13. Атака CSRF: http://learn.javascript.ru/csrf
// *

// 14. Метод fetch: замена XMLHttpRequest: http://learn.javascript.ru/fetch
// *

// 15. Таблица транспортов и их возможностей:
// http://learn.javascript.ru/ajax-summary
// *
