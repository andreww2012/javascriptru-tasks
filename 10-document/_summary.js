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

// 13. Метод document.write: http://learn.javascript.ru/document-write
// * document.write(str) работает только пока HTML-страница находится в
// процессе загрузки. Он допис. текст в текущее место HTML до того, как браузер
// построит из него DOM. Нет никаких ограничений на содержимое document.write.
document.write("<b>Любой контент</b>");
// * Аналогичный метод, автоматически добавляющий \n в конце строки:
document.writeln("...");
// * Когда HTML загрузился, и браузер полностью построил DOM, документ
// становится «закрытым». Вызов document.write/writeln() удалит всё содержимое.
// * Данный метод очень быстр, т. к. он не модифицирует существующий DOM, а
// пишет в текст страницы до его генерации. Иногда его используют для
// добавления скриптов с динамическим URL (см. статью).

// 14. Стили, getComputedStyle: http://learn.javascript.ru/styles-and-classes
// * style - объект с CSS св-ми объекта, предост. доступ на чтение и запись:
elem.style;
// Имя в CSS почти всегда совпадает с соотв. св-вом. Исключения: св-ва вида
// prop-name доступны через propName; св-во float доступно через cssFloat.
// Стиль в style находится в формате браузера. Примеры:
document.body.style.margin = "20px"
console.log(document.body.style.marginTop); // 20px
document.body.style.color = '#abc';
console.log(document.body.style.color); // rgb(170, 187, 204)
// Можно присвоить CSS-св-ву пустую строку, чтобы его сбросить:
elem.style.color = "";
// style содержит лишь тот стиль, который указан в атрибуте элемента.
// * Св-во для установки стиля в виде строки cssText. При его установке все
// предыдущие свойства style удаляются, читаются только корректные CSS св-ва.
elem.style.cssText;
// * Получение текущее значение CSS св-ва (не подд. IE8-):
window.getComputedStyle(element, "pseudo?");
// Второй аргумент - строка, которая указывается, когда нужен стиль
// псевдоэлемента, напр., "::before"
// Возвращается т. н. окончательное (resolved) зн-е, т. е. то, которое
// непосредственно применяется к эл-ту. При обращении к сокращённым вариантам
// св-в (margin, padding, border,...) правильный рез-т не гарантируется.
// Метод не позволяет узнать стиль :visited стилей в целях безопасности.
// * Метод currentStyle для IE8-: подробнее в статье.

// 15. Размеры и прокрутка элементов: http://learn.javascript.ru/metrics
// * Метрики - св-ва, содержащие внешние и внутренние размеры элемента в
// пикселях: http://learn.javascript.ru/article/metrics/metric-all.png
// * Ссылка на элемент. относительно которого позиционируется текущий:
elem.offsetParent;
elem.offsetLeft; // задают смещение относительно
elem.offsetTop;  // offsetParent: https://vk.cc/6QygCp
// * Получение "внешней" ширины/высоты эл-та (полный размер, включая border):
elem.offsetWidth;  // https://vk.cc/6Qylcn
elem.offsetHeight;
// * Метрики для display: none эл-ов равны нулю, а offsetParent равен null =>
function isHidden(elem) { return !elem.offsetWidth && !elem.offsetHeight; }
// * Отступ внутренней части элемента от внешней (по сути border, но не всегда)
elem.clientTop;  // https://vk.cc/6QyppH
elem.clientLeft; // https://vk.cc/6Qyq1j
// * Размер эл-та внутри рамок border (с учётом padding, но без прокрутки):
elem.clientWidth;  // https://vk.cc/6Qyu8I
elem.clientHeight; // https://vk.cc/6QyuSM
// * Аналоги clientWidth/Height, только добавляют прокрученную область эл-та,
// которую не видно по горизонтали/вертикали: https://vk.cc/6QyD9m
elem.scrollWidth;
elem.scrollHeight;
// * Ширина/высота невидимой части эл-та слева и сверху: https://vk.cc/6QyEDL
elem.scrollLeft; // P. S. в отличие от большинства св-в, которые доступны
elem.scrollTop;  // только для чтения, эти можно изменять.
// * Почему не стоит брать width/height из CSS описано в статье.

// 16. Размеры и прокрутка страницы: http://learn.javascript.ru/metrics-window
// * Документ – это document.documentElement (<html>) и он имеет все стандартные
// метрики, однако на практике есть ряд ньюансов.
// * Ширина/высота видимой части окна (https://vk.cc/6QXJCT):
document.documentElement.clientWidth; document.documentElement.clientHeight;
// * Размер окна браузера (clientWidth/Height-полоса прокрутки, не подд. IE8-):
window.innerWidth; window.innerHeight;
// * Полный размер с учётом прокрутки (в нек. браузерах есть баги с этими св-ми,
// их описании и пример определ. высоты страницы с учётом прокрутки - в статье):
document.documentElement.scrollWidth; document.documentElement.scrollHeight;
// * Получение текущей прокрутки, варианты:
document.documentElement.scrollLeft; // с такими обращениями есть баги в нек.
document.documentElement.scrollTop;  // браузерах, нужно исп. document.body ИЛИ:
window.pageXOffset; window.pageYOffset; // не подд. IE8-, НЕЛЬЗЯ менять
// * Прокрутку страницы можно осуществлять 1) когда DOM полностью загружен;
// 2) с помощью scrollLeft/Top, но также есть специальные методы:
window.scrollBy(x, y); // Прокручивает страницу относительно текущих координат
window.scrollTo(x, y); // Прокручивает страницу к текущим координатам
// * Метод для эл-та, который прокручивает страницу так, чтобы элемент оказался
// вверху, если параметр top равен true, и внизу, если top равен false
elem.scrollIntoView(); elem.scrollIntoView(true); // работает одинаково!
elem.scrollIntoView(false); // элемент будет внизу
// * Запрет прокрутки страницы (недостаток: увеличение ширины страницы, если
document.body.style.overflow = "hidden"; // была полоса прокрутки)

// 17. Координаты в окне: http://learn.javascript.ru/coordinates
// * Координатная система относительно окна браузера начинается в левом верхнем
// углу текущей видимой области окна.
// * Координаты элемента, под которыми понимаются размеры «воображаемого
// прямоугольника», который охватывает весь элемент. Возвращаются в виде
// объекта со св-ми (см. также картинку: https://vk.cc/6QYKyp):
// - top – Y-координата верхней границы элемента,
// - left – X-координата левой границы,
// - right – X-координата правой границы,
// - bottom – Y-координата нижней границы.
// Некоторые браузеры добавл. св-ва height = bottom - top, width = right - left.
// Координаты относительно окна не учитывают прокрутку, они высчитываются от
// границ текущей видимой области (!!!).
// Координаты могут быть дробными и отрицательными.
elem.getBoundingClientRect();
// * Вообще, содержимое эл-та может отображаться в одном прямоугольнике (<div>)
// или в нескольких (напр., строчный эл-т с текстом). Список прямоугольников:
elem.getClientRects(); // документация: https://vk.cc/6QYQho
// * Получает элемент, который находится на координатах (x,y) отнсительно окна
// (для координат вне окна возвращает null):
elem = document.elementFromPoint(x, y);
