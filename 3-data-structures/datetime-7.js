// Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

function getSecondsToTomorrow() {
  var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

  return Math.round( (tomorrow - new Date()) / 1000 );
}

// второй вариант. Используем кол-во секунд, прошедших с начала текущего дня
function getSecondsToTomorrow_() {
  var SECONDS_IN_DAY = 24 * 60 * 60;
  var date = new Date();

  return SECONDS_IN_DAY - ( date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() );
}