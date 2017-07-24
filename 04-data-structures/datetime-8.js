// Напишите функцию formatDate(date), которая выводит дату date
// в формате дд.мм.гг:

function formatDate(date) {
  var day = date.getDate();

  if (day < 10) {
    day = "0" + day;
  }

  // +1, поскольку месяцы в js нумеруются, начиная с нуля
  var month = date.getMonth() + 1;

  if (month < 10) {
    month = "0" + month;
  }

  // %100, чтобы убрать первые две цифры года
  var year = date.getFullYear() % 100;

  if (year < 10) {
    year = "0" + year;
  }

  return day + "." + month + "." + year;
}
