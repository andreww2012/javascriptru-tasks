// Создайте поле, которое будет предупреждать пользователя, если включен
// CapsLock. Выключение CapsLock уберёт предупреждение.
// Такое поле может помочь избежать ошибок при вводе пароля.

let input = document.getElementsByTagName("input")[0];
let capsMessage = document.getElementById("caps");

// null = неизвестно, true/false = нажат/не нажат
let capsPressed = null;

function changeCapsMessage(state) {
  let display = (state == undefined) ? capsPressed : state;
  capsMessage.style.display = display ? "block" : "none";
}

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

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 20 && capsPressed != null) {
    capsPressed = !capsPressed;
  }
});

document.addEventListener("keypress", (e) => {
  let char = getChar(e);

  // Отбрасываем служебные символы и символы без регистров
  if (!(char == null || char.toLowerCase() == char.toUpperCase())) {
    capsPressed = ((!e.shiftKey && char == char.toUpperCase())
      || (e.shiftKey && char == char.toLowerCase()));
  }
});

input.addEventListener("keyup", (e) => {
  changeCapsMessage();
});

input.addEventListener("focus", (e) => {
  changeCapsMessage();
}, true); // не всплывает!

input.addEventListener("blur", (e) => {
  changeCapsMessage(false);
}, true); // не всплывает!
