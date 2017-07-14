// Формы, элементы управления
// Раздел на сайте: http://learn.javascript.ru/forms-controls

// 1. Навигация и свойства элементов формы:
// http://learn.javascript.ru/form-elements
// * Получить список форм в документе/поиск формы по имени:
document.forms; document.forms.formName;
// * Получение всех элементов формы form/отдельного эл-та - https://vk.cc/6SmVh4
// (если в форме неск. эл-ов с одним именем, elements[name] вернёт коллекцию):
form.elements; form.elements.elementName;
// * (!) Свойство elements также есть у элементов <fieldset>:
form.elements.fieldsetName.elements.elementName;
// * Также элемент формы можно получить прямо через form, но есть особенность:
form.elementName; // при изм. св-ва name эл-т будет доступен под старым именем
// * По элементу можно получить ссылку на саму форму:
formElement.form;
// * input/textarea: доступ к содержимомум производится через value:
input.value = "value"; textatea.value; // НЕ используйте textarea.innerHTML
// * checkbox/radiobutton: получить состояние можно через chechked:
checkbox.checked = false; radio.checked;
// * select: выбранный пункт меняется через selectedIndex, =-1 отменяет выбор
select.selectedIndex = 0; // первый пункт
// Получение доступа к списку элементов <option>:
select.options;
option.selected; option.index; option.text; // свойства элементов <option>
// * Быстрое создание элемента <option> (последние два в true, чтобы выбрать):
option = new Option(text, value, defaultSelected, selected);

// 2. Фокусировка: focus/blur: http://learn.javascript.ru/focus-blur
// * События, вызываемые при фокусировке на элементе/потере фокуса:
elem.onfocus; elem.onblur;
// * Методы focus() и blur() переводят/уводят фокус с элемента, пример запрет
elem.onblur = function() { this.focus(); }; // потери фокуса (не раб. в FF)
// (!) Это не равно тому, если из onblur вызвать event.preventDefault().
// * Не все эл-ты поддерживают фокусировку. Однако, любой элемент поддерживает
// фокусировку, если у него есть tabindex (ti=-1 - игнор, ti=0 - будет последн.)
// * События onfocus и onblur НЕ всплывают, но м.б. пойманы на стадии перехвата.
// * focusin/focusout – "всплывающие" аналоги focus/blur, не подд. в FF 51- (!),
// но подд. в старейших IE. Также эти события не могут быть назначены через on.
// * Получение элемента, на котором сейчас фокус:
document.activeElement;

// 3. Изменение: change, input, cut, copy, paste:
// http://learn.javascript.ru/events-change
// * change происходит по окончании изменения значения элемента формы:
elem.onchange; // для текстовых элементов это событие = потери фокуса
// * input происхоидт при любом изменении значения текстового (!) элемента:
elem.oninput;
// * В IE10- есть событие onproprtychange, возникает при любом изменении св-ва
// о проблемах onchange/oninput/onpropertychange в старых IE см. в статье.
// * События cut, copy, paste, но нельзя получить данные кроссбраузерно.
elem.oncut; elem.oncopy; elem.onpaste;
