// Напишите функцию getLastDayOfMonth(year, month),
// которая возвращает последний день месяца.

function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0);

  return date.getDate();
}
