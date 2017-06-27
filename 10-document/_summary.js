// Раздел на сайте: http://learn.javascript.ru/document

// 1. Окружение: DOM, BOM и JS: http://learn.javascript.ru/browser-environment
// * window - с одной стороны глобальный объект в Javascript, с другой –
// содержит свойства и методы для управления окном браузера.
window.open("http://ya.ru"); // открывает новую вкладку
// * window: Javascript, DOM, BOM.
// * Javascript: Object, Array, Function, ...
// * DOM: document (даёт возм-ть взаимодействовать с содержимым страницы), ...
// * BOM: navigator, screen, location, frames, history, XMLHttpRequest. Это
// объекты для работы с чем угодно, кроме документа.

// 2. Дерево DOM: http://learn.javascript.ru/dom-nodes
// * DOM-модель – это внутреннее представление HTML-страницы в виде дерева.
// * Все элементы страницы, вкл. теги, текст, комментарии, являются узлами DOM.
// * У элементов DOM есть свойства и методы, которые позволяют изменять их.
// * Пробелы и переводы строки – это символы, которые также учитываются в DOM.
// * Исключения: пробелы до <head> игнорируются, а содержимое после </body> не
// создаёт узла, браузер переносит его внутрь, в конец body.
// * При чтении неверного HTML браузер автом. корректирует его: испр. ошибки в
// документе, закрывает теги и так далее. Напр., добавляет <tbody> в таблицы.
// * IE8- не генерирует текстовые узлы, если они состоят только из пробелов.


// 3. Работа с DOM из консоли: http://learn.javascript.ru/dom-console
// * Через консоль можно получить доступ к DOM, причём DOM в инструментах
// разработчика не совсем соответствует реальному (не отобр. пробельные узлы,
// с др. стороны, там можно увидеть псевдоэлементы ::before, ::after).
// * Посл. выбранный элемент доступен в консоли как $0, предыдущий – $1 и т. д.
// * Для поиска элементов в консоли есть два специальных метода:
// $$("div.my") – ищет все элементы в DOM по данному CSS-селектору.
// $("div.my") – ищет первый элемент в DOM по данному CSS-селектору.

// 4. Навигация по DOM-элементам: http://learn.javascript.ru/traversing-dom
document.documentElement; // <html>
document.body; // <body>. Равен null, если скрипт находится в <head>
document.head; // <head>
// * В DOM в качестве значения, обозначающего «нет такого элемента» или «узел
// не найден», используется не undefined, а null.
// * Основные ссылки, по которым можно переходить между узлами DOM:
// http://learn.javascript.ru/article/traversing-dom/dom-links.png
// * Получение всех дочерних элементов, включая/не включая текстовые:
elem.childNodes;
elem.children;
// * Доступ к первому/последнему элементу (все узлы/только элементы):
elem.firstChild; elem.lastChild;
elem.firstElementChild; elem.lastElementChild;
// * Элементы слева/справа соотв. данного элемента (все узлы/только элементы):
elem.previousSibling; elem.nextSibling;
elem.previousElementSibling; elem.nextElementSibling;
// * Элемент-родитель (все узлы/только элементы):
elem.parentNode;
elem.parentElement;
// * Единственное отличие parentNode от parentElement:
console.log(document.documentElement.parentNode); // document
console.log(document.documentElement.parentElement); // null
// * Коллекции (напр., childNodes) являются "псевдомассивами", работа с ними:
var elems = document.documentElement.childNodes;
[].forEach.call(elems, function(elem) { }); // Исп. методов массива
elems = Array.prototype.slice.call(elems); // Преобразование в массив
// В IE8- есть только children, в нём также присутствуют узлы-комментарии
// * Особые ссылки для таблиц:
table.rows; // коллекция строк TR таблицы
table.caption; // ссылки на элементы таблицы CAPTION, THEAD, TFOOT соотв.
table.tHead;
table.tFoot;
table.tBodies; // коллекция элементов таблицы TBODY (их может быть несколько)
tbody.rows; // коллекция строк TR секции
tr.cells; // коллекция ячеек TD/TH
tr.sectionRowIndex; // номер строки в текущей секции THEAD/TBODY
tr.rowIndex; // номер строки в таблице
td.cellIndex; // номер ячейки в строке

// 5. Поиск: getElement* и querySelector* и не только:
// http://learn.javascript.ru/searching-elements-dom
// * Получение элемента по id, правильная и общепринятная практика:
document.getElementById("идентификатор");
// * Получение элементов с заданным тегом внутри элемента elem:
elem.getElementsByTagName("tag-name"); // регистр тега не имеет значения
elem.getElementsByTagName('*'); // получить всех потомков элемента elem
// * Получение элементов с заданным атрибутом name:
document.getElementsByName("name");
// * Получение элементов с заданным классом внутри элемента elem:
elem.getElementsByClassName("className");
// * Получение всех элементов, удовлетворяющих CSS-селектору внутри elem:
elem.querySelectorAll("css-selector");
// * Получение первого элемента, удовлетворяющих CSS-селектору внутри elem:
elem.querySelector("css-selector");
// * Проверяет, удовлетворяет ли elem CSS-селектору, не поддерживается в IE8-:
elem.matches("css-selector");
elem.matchesSelector("css-selector"); // старое имя свойства
// * Ищет ближайший эл-т выше по иерархии DOM, подходящий под CSS-селектор.
// Сам элемент тоже включается в поиск. Относительно новое свойство.
// * Ещё один способ поиска, который обычно используется в XML: XPath.

// 6. Внутреннее устройство поисковых методов:
// http://learn.javascript.ru/searching-elements-internals

// 7. Свойства узлов: тип, тег и содержимое:
// http://learn.javascript.ru/basic-dom-node-properties
// * Разные DOM-узлы являются объектами различных классов. Иерархия классов:
// http://learn.javascript.ru/article/basic-dom-node-properties/hierarchy.png
// * Детальное описание свойств и методов каждого DOM-класса дано в
// спецификации, напр., тут: https://html.spec.whatwg.org/multipage/
// http://w3c.github.io/html-reference/elements.html
// * Самые главные свойства узлов DOM:
// * Получение типа узла (число от 1 до 12):
elem.nodeType;
// * Получение названия HTML-тега, применимо только к узлам-элементам:
elem.tagName;
// * Получение названия узла (выводит тип узла, для узлов-эл-тов равно tagName)
elem.nodeName;
// * Получение HTML-содержимого элемента в виде строки, для чтения и записи.
// Возвращается всегда валидный HTML-код. Важные тонкости innerHTML - в статье.
elem.innerHTML;
// * Получение HTML-элемента целиком (только для чтения, технически доступен
// и для записи, но это создаёт доп. трудности - см. статью).
elem.outerHTML;
// * АналогИ innerHTML для других видов узлов:
elem.data;
elem.nodeValue; // есть некоторые несущественные отличия от data, см. статью
// * Получение текста внутри элемента, за вычетом всех тегов (не подд. IE8-).
// Также используется для записи с "превращением" тегов в текст.
elem.textContent;
// * Нестандартное св-во, возвращающее текст в том виде, котором он виден.
// При записи ведёт себя как textContent. Подробности в статье.
elems.innerText;
// * Управление св-ом hidden элемента (аналог display: hidden, не подд. IE10-):
elem.hidden = true;
// * Посмотреть св-ва у данного типа элемента через консоль:
console.dir(elem);

// 8. Современный DOM: полифиллы: http://learn.javascript.ru/dom-polyfill
// * Полифилл – это библиотека, которая добавляет в старые браузеры поддержку
// возможностей, которые в современных браузерах являются встроенными.
// * Обычно полифилл состоит из двух частей:
// 1) проверка, есть ли встроенная возможность; 2) эмуляция, если её нет.
// * Пример: если св-во firstElementChild поддерживается, то его значение не
// может быть undefined. Если детей нет – свойство равно null, но не undefined.
// * Пример 2: проверка поддержки значений свойств: проверяем <input
// type="range"> => создаём <input> с таким type и см., подействовал ли он.
// * Для добавления нужной возможности берётся правильный класс и
// модифицируется его prototype. Примеры см. в статье.
// * Популярный сервис полифиллов: https://polyfill.io
