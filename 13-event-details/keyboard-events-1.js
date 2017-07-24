
// При помощи событий клавиатуры сделайте так, чтобы в поле можно было вводить
// только цифры.
// В поле должны нормально работать специальные клавиши Delete/Backspace и
// сочетания с Ctrl/Alt/Cmd.
// P.S. Конечно, при помощи альтернативных способов ввода (например, вставки
// мышью), посетитель всё же может ввести что угодно.

const elem = document.getElementsByTagName("input")[0];

// Функция из статьи на сайте
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

elem.onkeypress = (e) => {
  const char = getChar(e);

  // Отсеивание всех модификаторов и спец. символов
  if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey || char == null) {
    return;
  }

  if (char < '0' || char > '9') {
    return false;
  }
};
