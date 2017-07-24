// Напишите функцию getSecondsToday() которая возвращает,
// сколько секунд прошло с начала сегодняшнего дня.

function getSecondsToday() {
  var date = new Date();
  date.setHours(0, 0, 0);

  return Math.floor((new Date() - date) / 1000);
}

// Второй вариант, более быстрый
function getSecondsToday() {
  var date = new Date();

  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
