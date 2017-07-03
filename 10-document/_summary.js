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

// 9. Атрибуты и DOM-свойства:
// http://learn.javascript.ru/attributes-and-custom-properties
// * DOM-узел - обычный js-объект => он может содержать польз. св-ва и методы.
// * Работа с HTML-атрибутами:
elem.hasAttribute(name); // проверяет наличие атрибута
elem.getAttribute(name); // получает значение атрибута
elem.setAttribute(name, value); // устанавливает атрибут
elem.removeAttribute(name); // удаляет атрибут
elem.attributes; // псевдомассив всех атрибутов элемента
// * Атрибуты нечувствительны к регистру и всегда являются строками.
// * Стандартные HTML-атрибуты становятся свойствами соответствующих объектов.
// * Все станд. св-ва DOM синхр. с атрибутами, но не всегда на 100%.
// Пример 1: св-во href должно быть полной ссылкой, а атрибут м. б. любым.
// Пример 2: св-во checked м. б. только true/false, а атрибут - любой строкой.
// * Чаще всего при изменении атрибута обновляется св-во, а не наоборот.
// Пример: при изменении св-ва value эл-та input атрибут не обновляется,
// но при изменении атрибута св-во меняется.
// * Иногда соответствующие атрибуту св-ва называются по-другому. Пример:
// атрибуту class соотв. св-ва className и classList, атрибуту for - htmlFor.
// * classList - объект для работы с классами (не подд. IE9-). Его методы:
elem.classList.contains("class"); // есть ли у элемента класс class
elem.classList.add/remove("class"); // добавляет/удаляет класс class
elem.classList.toggle("class"); // переключает класс (есть-удаляет, нет-доб-ет).
// * Для нестанд. атрибутов св-ва не создаются, однако их можно исп. для CSS.
// * HTML5 разрешает атрибуты data-* и резервирует их для пользов. данных.
// * Осуществление доступа к data-*-атрибутам (не подд. IE9-)
elem.dataset.attrName; // обращение к св-ву data-attr-name (-a превращается в A)
// * Полифилл для атрибута hidden и особенности IE8- см. в статье.

// 10. Методы contains и compareDocumentPosition:
// http://learn.javascript.ru/compare-document-position
// * Метод contains возвр. true, если parent содержит child или parent == child:
parent.contains(child);
// * compareDocumentPosition возвращает битовую маску, содержащую информацию
// о содержании и относительном порядке элементов. Синтаксис и значения битов:
nodeA.compareDocumentPosition(nodeB);
// 000000 - nodeA и nodeB - один и тот же узел
// 000001 - Узлы в разных документах (или один из них не в документе)
// 000010 - nodeB предшествует nodeA (в порядке обхода документа)
// 000100 - nodeA предшествует nodeB
// 001000 - nodeB содержит nodeA
// 010000 - nodeA содержит nodeB
// 100000 - зарезервировано для браузера
// Предшествует = раньше встречается в порядке прямого обхода дерева документа.
// * Перевод числа в двоичную систему:
let x = 20; alert(x.toString(2)); // "10100"
// * Проверить конкретное условие, например, "nodeA содержит nodeB",
// можно при помощи битовых операций.

// 11. Добавление и удаление узлов:
// http://learn.javascript.ru/modifying-document
// * Создание элемента с указанным тегом:
document.createElement("tag-name");
// * Создание текстового узла:
document.createTextNode("text");
// * Вставка элемента elem в конец дочерних элементов parentElem:
parentElem.appendChild(elem);
// * Вставка elem в коллекцию детей parentElem перед элементом nextSibling
// (если nextSibling равно null, работает как appendChild):
parentElem.insertBefore(elem, nextSibling);
// * Все методы вставки возвращают вставленный узел.
// * Создание копии элемента. Второй параметр: копировать ли дочерние элементы
elem.cloneNode(true / false);
// * Удаление звена elem из списка детей parentElem:
parentElem.removeChild(elem);
// * Замена звена elem на newElem:
parentElem.replaceChild(newElem, elem);
// * Последние два метода возвращают удалённый узел.
// * Удаление звена elem без ссылки на родителя (не подд. IE11-):
elem.remove();

// 12. Мультивставка: insertAdjacentHTML и DocumentFragment:
// http://learn.javascript.ru/multi-insert
// * Оптимизация вставки в документ: быстрее создать структуру элементов вне
// DOM, а не вставлять новые элементы в DOM каждый по отдельности.
// * Оптимизация добавления множества узлов: операция вида innerHTML += "..."
// плоха с точки зрения произв-ти (напр., будут перезагружены все картинки).
// * Метод для вставки произвольного HTML в любое место документа:
// where: куда вставлять по отн. к эл-ту (before/afterBegin/End).
elem.insertAdjacentHTML(where, "произвольныйhtml");
// * Вставка в произвольное место элемента newElem:
elem.insertAdjacentElement(where, newElem);
// * Вставка в произвольное место текстового узла:
elem.insertAdjacentText(where, "text");
// Последние три метода поддерживаются не всеми версиями Firefox.
// * Вставку большого числа эл-ов можно пр-ть через объект DocumentFragment
// У него есть методы appendChild, cloneNode, при вставке фрагмента в DOM
// вставляется не сам элемент, а его дети.
var fragment = document.createDocumentFragment();
fragment.appendChild(node);
elem.appendChild(fragment);
// * Новые методы для вставки (nodes – DOM-узлы или строки, в любом кол-ве):
node.append(...nodes); // Вставляет nodes в конец node
node.prepend(...nodes); // Вставляет nodes в начало node
node.after(...nodes); // Вставляет nodes после узла node
node.before(...nodes); // Вставляет nodes перед узлом node
node.replaceWith(...nodes); // Вставляет nodes вместо node
