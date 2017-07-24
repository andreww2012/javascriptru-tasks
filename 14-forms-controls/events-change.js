// Создайте интерфейс для автоматического вычисления процентов по вкладу.
// Ставка фиксирована: 12% годовых. При включённом поле «капитализация» –
// проценты приплюсовываются к сумме вклада каждый месяц (сложный процент).
// Технические требования:
// * В поле с суммой должно быть нельзя ввести не-цифру. При этом пусть в нём
// работают специальные клавиши и сочетания Ctrl-X/Ctrl-V.
// * Изменения в форме отражаются в результатах сразу.

let formElems = document.forms.calculator.elements;
let money, months, capitalization = formElems.capitalization.checked;

function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}

function calculate() {
  money = +formElems.money.value;
  months = +formElems.months.options[formElems.months.selectedIndex].value;
  capitalization = formElems.capitalization.checked;

  let temp = money * months / 100;
  let newMoney = Math.round(
    capitalization ?
      money * Math.pow(1.01, months) :
      money + money * months / 100
  );

  document.getElementById("money-before").innerHTML = `<b>${money}</b>`;
  document.getElementById("money-after").innerHTML = `<b>${newMoney}</b>`;
  document.getElementById("height-after").style.height =
    (money ? (100 * (newMoney / money)) : 100) + "px";
}

formElems.money.onkeypress = e => {
  const char = getChar(e);

  // Отсеивание всех модификаторов и спец. символов
  if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || char == null) {
    return;
  }

  if (char < '0' || char > '9') {
    return false;
  }
};

formElems.money.oninput = formElems.months.onchange =
formElems.capitalization.onchange = calculate;

calculate();
