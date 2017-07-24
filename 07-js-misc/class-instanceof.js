// Напишите функцию formatDate(date), которая возвращает дату
// в формате dd.mm.yy.
// Ее первый аргумент должен содержать дату в одном из видов:
// Как объект Date.
// Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
// Как число секунд с 01.01.1970.
// Как массив [гггг, мм, дд], месяц начинается с нуля
// Для этого вам понадобится определить тип данных аргумента и,
// при необходимости, преобразовать входные данные в нужный формат.

function formatDate(date) {
  switch({}.toString.call(date).slice(8, -1)) {
    case "String":
      date = new Date(date);
      break;
    case "Number":
      date = new Date(date * 1000);
      break;
    case "Array":
      date = new Date(date[0], date[1], date[2]);
      break;
  }

  return date.toLocaleString("ru", {day: "2-digit", month: "2-digit", year: "2-digit"});
}
