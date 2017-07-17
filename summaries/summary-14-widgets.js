// Создание графических компонентов
// Раздел на сайте: https://learn.javascript.ru/widgets

// 1. Графические компоненты: https://learn.javascript.ru/widgets-structure
// * Код виджетов (граф. компонентов) лучше оформлять в виде объектов. Пример:
function Menu(options) {
  var elem = options.elem; // В конструктор передаётся объект
  elem.onmousedown = () => { return false; }
  elem.onclick = (e) => {
    if (event.target.closest('.title') && elem.contains(closestTitle)) { t() }
  };
  function t() { elem.classList.toggle('open'); }
  this.toggle = t; // t также и публичный метод под именем toggle
  // ...
}
var menu = new Menu({ elem: document.getElementById('sweets-menu') });
menu.toggle(); // Используем toggle снаружи
// Основные принципы построения классов виджетов:
// * Виджет – это объект, который либо контролирует готовое дерево DOM, либо
// создаёт своё.
// * В конструктор виджета передаётся объект аргументов options.
// * Виджет при необходимости создаёт элемент или «оживляет» готовый. Внутри в
// разметке не используются id.
// * Обработчики назначаются через делегирование.
// * Обработчики событий вызывают соотв. метод, не пытаются делать всё сами.
// * При инициализации, если существенный участок работы можно отложить до
// реального задействования виджета – откладываем его.

// 2. Вёрстка графических компонентов: http://learn.javascript.ru/widgets-markup
// * HTML-разметка и названия CSS-классов должны отражать смысл, не оформление.
// * Состояние виджета – класс на элементе (обычно корневой, но не всегда).
// * Все классы внутри виджета начинают с его имени.
// * Стили должны вешаться на класс, а не на тег.
// * (!) На практике из этих правил зачастую делают исключения.

// 3. Шаблонизатор LoDash: http://learn.javascript.ru/template-lodash
// * Шаблон – это строка в спец. формате, которая путём подстановки значений
// и выполнения встроенных фрагментов кода превращается в DOM/HTML.
// * В LoDash для работы с шаблонами есть функция _.template, пример:
/* Шаблон:
<div class="menu">
  <span class="title"><%-title%></span>
  <ul><% items.forEach(function(item) { %><li><%-item%></li><% }); %></ul>
</div>
let html = _.template(tmpl)({ title: "Сладости", items: ["1","2","3"] });
/*
// * Синтаксис шаблонов LoDash (https://lodash.com/docs/4.17.4#template):
// <% code %> – для выполнения произвольного js-кода.
// <%= expr %> – для вставки expr как HTML
// <%- expr %> – для вставки expr как текста (т. е. с заменой символов <>&"').
// * Синтаксис функции _.template(tmpl, data, options):
// - tmpl - шаблон
// - options - необязательные настройки, например, можно поменять разделители.
// Эта ф-я запускает «компиляцию» шаблона tmpl и возвр. р-т в виде ф-ии,
// которую далее можно запустить с данными и получить строку-результат.
// * Шаблон удобнее хранить в HTML, напр. так:
/* Можно поставить любой другой нестандартный type.
<script type="text/template" id="menu-template">
<div class="menu">span class="title"><%-title%></span></div>
</script>
let template = document.getElementById("menu-template").innerHTML;
*/
// * Устройство функции _.template(str): вызов ф-ии разбивает строку str по
// разделителям и при помощи new Function создаёт на её основе js-ф-ю.
// * Чтобы не компилир. один и тот же шаблон много раз, рез-ты обычно кешируют.
// * Про отладку шаблонов см. статью.
// * Шаблонные системы, основанные на схожем принципе: ELS, pug, handlebars.
// * В AngularJS и KnockoutJS ШС осн. на клонир. и послед. изменении DOM-узла.

// 4. Коллбэки и события на компонентах:
// http://learn.javascript.ru/custom-events
// * Для того, чтобы внешний код мог узнавать о важных событиях, произошедших
// внутри компоненты, используются:
// - Коллбэки – они передаются «снаружи» при создании компонента, которые он
// обязуется вызвать при наступлении событий.
// - События – компонент генер. их на корн. элементе при помощи dispatchEvent,
// а внешн. код ставит обработчики при помощи addEventListener. Такие события
// всплывают, если указан флаг bubbles => можно использовать делегирование.