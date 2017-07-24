// Есть селект (см. form-elements.html).
// При помощи JavaScript:
// * Выведите значение и текст текущей выбранной опции.
// * Добавьте опцию: <option value="Classic">Классика</option>.
// * Сделайте её выбранной.

let select = document.getElementsByTagName("select")[0];
let selectedOption = select.options[select.selectedIndex];

// (1)
alert("Ранее выбранная опция: name=", selectedOption.value, ", text=",
  selectedOption.text);

// (2) и (3)
select.appendChild(new Option("Классика", "Classic", true, true));
