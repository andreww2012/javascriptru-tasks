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
// и приводится пример создания простого сервера (см. 16-ajax/server-example.js)

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
xhr.getAllResponseHeaders(); // возвр. всё кроме Set-Cookie/..2 в виде строки
// * Синхр. запросы исп. очень редко (блокируется взаимодействие со страницей).
// Если синхр. вызов занял много времени, то браузер предложит закрыть страницу.
// * Соб. readystatechange происх. неск. раз в процессе отсылки и получ. ответа.
// Св-во readyState содержит текущее состояние запроса:
// const unsigned short UNSENT = 0; начальное состояние
// const ... OPENED = 1;            вызван open
// const ... HEADERS_RECEIVED = 2;  получены заголовки
// const ... LOADING = 3;           загруж. тело(получен очередной пакет данных)
// const ... = 4;                   запрос завершён
// Запрос проходит их в порядке 0 → 1 → 2 → 3 → … → 3 → 4.
// См. в xmlhttprequest-example.js пример типичного XMLHttpRequest запроса.
