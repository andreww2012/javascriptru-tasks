// Проверка логина

var userLogin = prompt("Кто пришёл?", "");

if (userLogin == "Админ") {
  var userPassword = prompt("Пароль?", "");

  if (userPassword == "Чёрный Властелин") {
    alert("Добро пожаловать!")
  } else if (userPassword == null) {
    alert("Вход отменён");
  } else {
    alert("Пароль неверен");
  }
} else if (userLogin == null) {
  alert("Вход отменён");
} else {
  alert("Я вас не знаю");
}
