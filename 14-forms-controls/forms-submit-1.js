// Создайте функцию showPrompt(text, callback), которая выводит форму для ввода
// с сообщением text и кнопками ОК/Отмена.
// * При отправке формы (OK/ввод в текстовом поле) – должна вызываться функция
// callback со значением поля.
// * При нажатии на Отмена или на клавишу Esc – должна вызываться функция
// callback(null). Клавиша Esc должна закрывать форму всегда, даже если поле
// для ввода сообщения не в фокусе.
// Особенности реализации:
// * Форма должна показываться в центре окна (и оставаться в центре при
// изменении его размеров, а также при прокрутке окна!).
// * Текст может состоять из нескольких строк, возможен любой HTML
// * При показе формы остальные элементы страницы использовать нельзя, не
// работают другие кнопки и т.п, это окно – модальное.
// * При показе формы – сразу фокус на INPUT для ввода.
// * Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не
// позволяют переключиться на другие элементы страницы.
// Пример использования:
/*
showPrompt("Введите что-нибудь<br>... умное :)", function(value) {
alert( value );
});
*/

function showPrompt(text, callback) {
  let prompt = document.getElementById("prompt");
  let promptForm = document.getElementById("prompt-form");
  let buttonOk = promptForm.ok;
  let buttonCancel = promptForm.cancel;
  let textElem = promptForm.text;

  document.getElementById("form-message").innerHTML = text;
  textElem.value = "";
  prompt.style.display = "block";
  textElem.focus();

  function closePromptOnEscape(e) {
    if (e.keyCode == 27) { // escape
      closePrompt(null);
    }
  }

  function closePrompt(text) {
    callback(text);
    prompt.style.display = "none";
    document.removeEventListener("keydown", closePromptOnEscape);
  }

  promptForm.onsubmit = () => {
    let value = textElem.value;
    if (value == "") return false;
    closePrompt(value);
    return false;
  };

  buttonCancel.onclick = () => {
    closePrompt(null);
  }

  let firstFormElem = promptForm.elements[0];
  let lastFormElem = promptForm.elements[promptForm.elements.length - 1];

  firstFormElem.onkeydown = e => {
    if (e.keyCode == 9 && e.shiftKey) {
      lastFormElem.focus();
      return false;
    }
  };

  lastFormElem.onkeydown = e => {
    if (e.keyCode == 9 && !e.shiftKey) {
      firstFormElem.focus();
      return false;
    }
  };

  document.addEventListener("keydown", closePromptOnEscape);
}
