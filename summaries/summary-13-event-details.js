// События в деталях
// Раздел на сайте: http://learn.javascript.ru/event-details

// 1. Мышь: клики, кнопка, координаты: http://learn.javascript.ru/mouse-clicks
// * Типы событий мыши, простые:
// - mousedown - кнопка мыши нажата над элементом.
// - mouseup - кнопка мыши отпущена над элементом.
// - mouseover - мышь появилась над элементом.
// - mouseout - мышь ушла с элемента.
// - mousemove - каждое движение мыши над элементом генерирует это событие.
// Комплексные:
// - click - вызыв. при клике мышью (mousedown), а затем mouseup на одном эл-те
// - contextmenu - вызывается при клике правой кнопкой мыши на элементе.
// - dblclick - вызывается при двойном клике по элементу.
// * Одно действие может вызывать несколько событий: клик вызыв. down, up, click
// * Получение информации о кнопке мыши (1=левая, 2=средняя, 3=правая):
event.which; // не подд. IE8-
// * Во всех событиях мыши есть информация о нажатых клавишах-модификаторах:
event.shiftKey; event.altKey; event.ctrlKey; event.metaKey; // посл. для Mac
// (!) На Mac вместо Ctrl используется Cmd, подробнее в статье.
// * Координаты курсора относительно текущего окна/документа соответственно:
event.clientX; event.clientY; event.pageX; event.pageY; // pageX/Y не подд. IE9-
// * Об особенностях IE8- см. в статье.

// 2. Мышь: отмена выделения, невыделяемые элементы:
// http://learn.javascript.ru/unselectable
// * Двойной клик или нажатие с движением курсора, как правило, инициируют
// выделение текста. Однако, есть способы, как делать элемент невыделяемым.
// 1) Отмена события mousedown и selectstart для IE. Однако, это не означает
// запрещение выделения, для этого нужно начать выделение вне элемента:
elem.onmousedown = elem.onselectstart = () => false;
// 2) Снятие выделения пост-фактум: ondblclick="clearSelection()". "-" подхода:
// выделение происходит, но сразу же пропадает + работает предыдущий способ
// 3) Исп. нестандартное CSS-св-во user-select (особенности IE9- см. в статье)
// * Если же надо запретить копирование, нужно воспользоваться oncopy:
elem.oncopy = function() { alert("Копирование запрещено!"); return false; }

// 3. Мышь: движение mouseover/out, mouseenter/leave:
// http://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave
// * mouseover происх., когда мышь появл. над элементом,mouseout - когда уходит:
// https://vk.cc/6RrcSJ. Узнать, с какого эл-та пришла/на какой ушла мышь:
event.relatedTarget; // (!) может быть null
// * mousemove срабатывает при движении мыши. Последние три события срабатывают
// так часто, наск. это позволяет внутр. система взаимодейств. с мышью браузера.
// Т. о., при быстрых движениях мышью нек. DOM-эл-ты могут быть пропущены.
// * При переходе на потомка срабатыв. mouseout на родителе:https://vk.cc/6Rrjot
// т. к. курсор мыши м. б. только над одним элементом - самым глубоким в DOM.
// * mouseenter/mouseleave - аналоги mouseover/mouseout с двумя отличиями:
// не учитываются переходы внутри элемента; эти события не всплывают.
// * Поскольку последние два события не вспалывают, с ними нельзя исп.
// делегирование. Но когда оно всё-таки нужно, используем mouseover/mouseout.
// * Особенности IE8-: relatedTarget -> fromElement (mouseout), toElement (out).

// 4. Мышь: Drag'n'Drop: http://learn.javascript.ru/drag-and-drop
// * В HTML5 есть поддержка Drag’n’Drop при помощи специальных событий. У этих
// событий есть существенные ограничения. Напр., нельзя огранич. зону переноса.
// * Алгоритм Drag'n'Drop, реализуемый при помощи событий мыши:
// 1) Отслеживаем нажатие мыши на переносимом эл-те при помощи mousedown.
// 2) При нажатии подготавляем элемент к перемещению.
// 3) Отслеживаем движение мыши через mousemove, параллельно передвигая элемент.
// 4) При наступл. mouseup останавливаем перенос, производим нужные доп.действия
// Примеры реализации Drag'n'Drop по этому алгоритму есть в статье.
// * Важные моменты при реализации:
// 1) Событие mousemove нужно отслеживать на document;
// 2) Если у элемента есть собственный Drag'n'Drop, его нужно отключить:
elem.ondragstart = () => false;
// 3) При переносе нужно сохранять изначальный сдвиг курсора относит. элемента.
// 4) (из комментариев: mouseup также лучше отслеживать на document).

// 5. Мышь: Drag'n'Drop более глубоко:
// https://learn.javascript.ru/drag-and-drop-objects
// * В статье описано, как реализовать более продвинутый Drag'n'Drop.
// Например, рассматриваются следующие требования к задаче:
// - Поддержка большого количества элементов без «тормозов».
// - Продвинутые возможности по анимации переноса.
// - Удобная обработка успешного и неудачного переноса.

// 6. Мышь: колёсико, событие wheel: https://learn.javascript.ru/mousewheel
// * Событие, происходящее при движении колёсика мыши над любым элементом:
elem.onwheel; // P. S. событие происходит ДО прокрутки; не путать с onscroll.
// * onwheel появилось не так давно, ранее браузеры обрабатывали прокрутку через
// mousewheel (все, кроме ff), MozMousePixelScroll (ff), DOMMouseScroll.
// * Св-ва события onwheel:
event.deltaX/deltaY/deltaZ; // кол-во прокруч. пикселей по направлениям
// * Подробнее о "старых" событиях и IE8- см. в статье.

// 7. Мышь: IE8-, исправление события: http://learn.javascript.ru/fixevent
// Статья чисто про IE8-.

// 8. Прокрутка: событие scroll: http://learn.javascript.ru/onscroll
elem.onscroll;
// * В отличие от события onwheel (колесико мыши), его могут генерировать
// только прокручиваемые элементы или окно window.
// * Некоторые области применения onscroll:
// - Показ дополнительных элементов навигации при прокрутке.
// - Подгрузка и инициализация элементов интерфейса, ставших видимыми после
// прокрутки.

// 9. Клавиатура: keyup, keydown, keypress:
// http://learn.javascript.ru/keyboard-events
// * События keydown/keyup происходят при нажатии/отпускании клавиши и
// позволяют получить её скан-код в свойстве keyCode:
elem.onkeydown; elem.onkeyup;
event.keyCode; // скан-код одинаков для любых раскладок и при любом регистре!
// ПРАВИЛО: скан-код = коду соответствующей заглавной английской буквы/цифры.
// * Соб-е keypress возникает сразу после keydown, если нажата символьн. клавиша
elem.onkeypress;
// Св-ва для получения кода символа (есть много несовместимостей!):
event.charCode; event.which;
// В статье есть кросс-браузерная функция для получения символа из keypress.
// Также в keypress есть следующие св-ва:
event.shiftKey; event.altKey; event.ctrlKey; event.metaKey;
// * Ввод можно предотвр., отменив действие браузера на keydown или keypress.
// * (!) На момент срабатывания keydown/keypress клавиша ещё не обработана.
// Т. о., можно отменить различные действия, но не системные сочетания клавиш.
// (!) Есть много несовместимостей, см. таблицу в статье, общий вывод:
// - Обычные символы работают везде корректно.
// - CapsLock под MacOS ведёт себя плохо, не стоит ставить на него обработчики.
// - Для других спец. клавиш и сочетаний следует использовать только keydown.
// * При долгом нажатии клавиши возникает автоповтор. По стандарту, должны
генерироваться события keydown+keypress и стоять св-во repeat=true:
event.repeat; // Однако в реальности на это полагаться нельзя. Полагаться можно
// только на keydown при каждом автонажатии и keyup по отпусканию клавиши.

// 10. Загрузка документа: DOMContentLoaded, load, beforeunload, unload:
// http://learn.javascript.ru/onload-ondomcontentloaded
// * Стадии загрузки документа, на которые можно повесить обработчики:
// * DOMContentLoaded - браузер полностью загрузил HTML и построил DOM-дерево.
// Не подд. в IE8-. Обработчик можно повесить только так:
document.addEventListener("DOMContentLoaded", ready); // ВАЖНО:
// - Неасинхронные скрипты браузер обязан выполнить до построения дерева DOM.
// - Внешние стили не влияют на событие DOMContentLoaded, однако если после
// стиля идёт скрипт, то он обязан дождаться загрузки стилей.
// - Firefox/Chrome/Opera автозаполняют формы по DOMContentLoaded.
// * onload - браузер загрузил все ресурсы:
window.onload = function() {  };
// * unload - происходит, когда пользователь уходит со страницы, отменить нельзя
window.unload = function() {  };
// * beforeunload - то же самое, но можно отменить уход, вернув строк
// (внимание: многие браузеры игнорируют этот текст и показывают своё сообщение)
window.onbeforeunload = function() { return "Уйти?"; };
// * Про эмуляцию DOMContentLoaded для старых браузеров см. в статье.

// 11. Загрузка скриптов, картинок, фреймов: onload и onerror:
// http://learn.javascript.ru/onload-onerror
// * Браузер позволяет отслеживать загрузку внешних ресурсов. События:
// * onload, когда ресурс (скрипты, картинки, стили, фреймы) загружен:
let script = document.createElement('script'); script.src = "myscript.js";
document.body.appendChild(script); script.onload = function() {  };
// * onerror (скрипты, картинки, стили) отслеживает ошибки:
script.onerror = function() {  };
// * (!) Фреймы не поддерживают onerror, onload срабатывает и в случае ошибки.
// Однако, если фрейм загруж. с того же домена, можно, используя iframe
// .contentWindow.document получить ссылку на документ и поставить обработчик
// * Событие onreadystatechange - для IE8-, подробности см. в статье.
