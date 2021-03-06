// Основы работы с событиями
// Раздел на сайте: http://learn.javascript.ru/events-and-interfaces

// 1. Введение в браузерные события:
// http://learn.javascript.ru/introduction-browser-events
// * Событие – это сигнал от браузера о том, что что-то произошло. События:
// События мыши:
// -- click – происходит, когда кликнули на элемент левой кнопкой мыши
// -- contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
// -- mouseover – возникает, когда на элемент наводится мышь
// -- mousedown и mouseup – когда кнопку мыши нажали или отжали
// -- mousemove – при движении мыши
// События на элементах управления:
// -- submit – посетитель отправил форму <form>
// -- focus – посетитель фокусируется на элементе, например нажимает на <input>
// Клавиатурные события:
// -- keydown – когда посетитель нажимает клавишу
// -- keyup – когда посетитель отпускает клавишу
// События документа:
// -- DOMContentLoaded – когда HTML загружен и обработан, DOM документа
// полностью построен и доступен.
// События CSS:
// -- transitionend – когда CSS-анимация завершена
// * Событию можно назначить обработчик, то есть функцию, которая сработает,
// как только событие произошло.
// * Назначение обработчиков событий - способы:
// 1) Использование HTML атрибута on<событие>, напр., onclick и т. д. При таком
// заднии браузер автоматически создаёт функцию из содержимого атрибута.
// 2) Исп. св-ва on<событие> DOM-элемента (установка атрибута записывает в св-во
// как раз эту созданную функцию):
elem.onclick; elem.onmouseover; // и т. д.
// - Внутри обработчика события this ссылается на текущий элемент.
// - (!) Не используйте setAttribute при назначении событий.
// 3) Способ, позволяющий обойти ограничение невозможности назначения нескольких
// обработчиков на одно событие (event-name БЕЗ on):
elem.addEventListener("event-name", handler1, phase); // phase - необяз. арг-т,
elem.addEventListener("event-name", handler2, phase); // разъяснение в пункте 4
elem.removeEventListener("event-name", handler1, phase);
elem.removeEventListener("event-name", handler2, phase);
// - (!) Удаление требует именно ту же функцию и тот же phase.
// - Можно одновременно назначать обработчики и через DOM-свойство и через
// addEventListener, но так делать не рекомендуется.
// - "+" 3-го способа в том, что не все события можно назвачить 2-м способом.
// 3.1) В IE8- вместо add/removeEventListener используются свои методы:
// element.attach/detachEvent("on" + event, handler) (подробнее в статье).

// 2. Порядок обработки событий:
// http://learn.javascript.ru/events-and-timing-depth
// * События могут возникать не только по очереди, но и «пачкой» по много
// сразу. Возможно, что во время обработки одного события возникают другие.
// * В каждом окне выполняется только один главный поток, выполняющий js.
// Он выполняет команды посл-но и блокируется при выводе модальных окон.
// * Web Workers позволяют запускать доп. js-потоки: https://vk.cc/6R4BCy
// * Обработка событий:
// - Когда происходит событие, оно попадает в очередь (вып. беск. цикл)
// - Иногда события добавляются в очередь "сразу пачкой".
// - Нек. события работают синхронно (пример: onfocus НЕ в IE
// - Неасинхронность событий можно обойти, обернув вызов события в
// конструкцию вида setTimeout(() => elem.focus(), 0).

// 3. Объект события: http://learn.javascript.ru/obtaining-event-object
// * Детали события браузер записывает в специальный объект события. Он
// передаётся первым аргументом в обработчик. Нек. св-ва объекта event:
event.type; // тип события (напр., click)
event.currentTarget; // эл-т, на котором сработал обработчик(=this почти всегда)
event.clientX; event.clientY; // коорд. курсора (отн. окна) в момент клика
// * Объект события также доступен в HTML (в аргументе события).
// * IE8- не передаёт параметр, а создаёт глоб. объект window.event

// 4. Всплытие и перехват: http://learn.javascript.ru/event-bubbling
// 1) Всплытие
// * Принцип всплытия: при наступлении события обработчики сначала срабатывают
// на самом вложенном эл-те, затем на его родителе и т. д.: https://vk.cc/6R5sR0
// * Всплывают *почти* все события.
// * Самый глубокий эл-т, который вызывает событие, наз. целевым. Элемент же,
// на которого навешено событие, вызывается через currentTarget. Получ.целевого:
event.target; // иллюстрация отличия target от currTarget: https://vk.cc/6RdqhD
// * Прекращение вспылытия: любой промежуточный обработчик может решить, что
// событие полностью обработано, и остановить всплытие с помощью
event.stopPropagation(); // при этом остальные события будут выполнены
// * То же самое + остановка обработки всех оставшихся событий на текущем эл-те:
event.stopImmediatePropagation();
// 2) Перехват (погружение)
// * Стандарт выделяет три стадии прохода события: https://vk.cc/6RdIrA
// 1. Событие сначала идет сверху вниз («стадия перехвата», capturing stage).
// 2. Событие достигло целевого элемента («стадия цели», target stage).
// 3. После этого событие начинает всплывать («стадия всплытия», bubbling stage)
// * Чтобы пойм. событие на 1-й стадии, нужно указать 3-м аргументом в aEL true.
// * Есть события, которые не всплывают, но которые можно перехватить (onfocus).
// * Пример с перехватом и вспылтием: https://vk.cc/6RdMz4
// * Получение номера текущей стадии (1 = погружение, 3 = всплытие):
event.eventPhase;
// * Об особенностях IE8- см. в статье.

// 5. Делегирование событий: http://learn.javascript.ru/event-delegation
// * Всплытие событий позволяет реализовать делегирование - возможность навесить
// один обработчик на общего предка для перехвата событий от однотипных объектов
// Пример: навешиваем обработчик не на <td>, а на всю таблицу.
// Ещё один: навешиваем обработчик на всё меню, вызываем нужную функцию для
// каждого пункта. Код и разбор этих примеров - в статье.

// 6. Приём проектирования "поведение": http://learn.javascript.ru/behavior
// * Приём проектирования «поведение» состоит из двух частей:
// - элементу ставится атрибут, описывающий его поведение.
// - при помощи делегирования ставится обработчик на документ, который ловит
// все клики и, если элемент имеет нужный атрибут, производит нужное действие.
/* Пример (этот и ещё один - в статье):
<button data-counter>1</button><button data-counter>2</button>
<script>
  document.onclick = function(event) {
    if (!event.target.hasAttribute('data-counter')) return;
    event.target.innerHTML++;
  };
</script>
*/
// * Стандарт рекомендует для своих целей называть атрибуты data-*.
// * Для добавления обработчиков на document рекоменд. использ. addEventListener

// 7. Действия браузера по умолчанию:
// http://learn.javascript.ru/default-browser-action
// * Многие события автоматически влекут за собой действие браузера, но
// зачастую оно нам не нужно. Однако, его можно отменить. Способы:
// 1) Воспользоваться объектом события - использовать стандартный метод
event.preventDefault();
// 2) Если обработчик назначен через onсобытие, вернуть false из обработчика.
// (примечание: другие значения возвращать не нужно, в этом нет смысла).
// * Вот некоторые примеры событий, которые вызывают действие браузера:
// mousedown – нажатие кнопкой мыши, когда курсор начинает выделение текста
// click на <input type="checkbox"> – ставит или убирает галочку.
// submit – при нажатии на <input type="submit"> в форме данные отпр. на сервер.
// wheel – движение колёсика мыши инициирует прокрутку.
// keydown – при нажатии клавиши в поле ввода появляется символ.
// contextmenu – при правом клике показывается контекстное меню браузера.
// и т. д. Об особенностях IE8- см. в статье.

// 8. Генерация событий на элементах: http://learn.javascript.ru/dispatch-events
// * Можно не только назн. обработчики на события, но и генерировать их самому.
// * Генерация события (event-type - свой или встроенный (напр., click) тип,
// bubbles - будет ли всплывать, cancelable - можно ли отмен.действие по умолч.)
let event = new Event("event-type", { bubbles: false, cancelable: false });
// * Инициация события (возвращает false, если будет вызван preventDefault()):
elem.dispatchEvent(event);
// * Способ отличить реальное действие от скриптового(подд. не всеми браузерами)
event.isTrusted; // true - реальное
// * Помимо isTrusted, при создании события браузер автом. ставит след. св-ва:
// target: null, но ставится автоматически при вызове dispatchEvent;
// type - первый аргумент new Event; bubbles, cancelable - также из new Event.
// Другие св-ва события можно установить вручную (напр., координаты мыши).
// * Для некоторых конкретных типов событий есть свои конструкторы:
// UIEvent, FocusEvent, MouseEvent, WheelEvent, KeyboardEvent и т. д.
// * Специфический конструктор позволяет указать стандартные свойства для
// данного типа события, напр., clientX и clientY для события мыши.
// * Для генерации кастомных событий можно исп. констр. CustomEvent. Отличия от
// Event: во 2-м аргументе в св-ве detail указывается кастомный объет с данными.
// * Способ генерации событий для IE11-: 1) Создание события, eventInterface -
// Event, MouseEvent, FocusEvent, KeyboardEvent и т. д.
event = document.createEvent("eventInterface");
// 2) Инициализация события, где 2-й аргумент - bubbles, 3-й - cancelable;
// для каждого типа события есть свой метод (initMouseEvent, initKeyboardEvent),
event.initEvent("type", false, false); // который принимает свои параметры.
// В статье есть информация о IE8- и полифиллах.
