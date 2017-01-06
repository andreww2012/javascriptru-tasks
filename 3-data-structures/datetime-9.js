// Напишите функцию formatDate(date), которая форматирует дату date так:
// Если со времени date прошло менее секунды, то возвращает "только что".
// Иначе если со времени date прошло менее минуты, то "n сек. назад".
// Иначе если прошло меньше часа, то "m мин. назад".
// Иначе полная дата в формате "дд.мм.гг чч:мм".

function formatDate(date) {
  var SECOND = 1000,
      MINUTE = SECOND * 60,
      HOUR = MINUTE * 60;

  var diff = new Date() - date;

  if (diff < SECOND) {
    return "только что";
  }
  
  if (diff < MINUTE) {
    return Math.floor(diff / SECOND) + " сек. назад";
  }
  
  if (diff < HOUR) {
    return Math.floor(diff / MINUTE) + " мин. назад";
  }

  var day = date.getDate();
  if (day < 10) day = "0" + day;

  var month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;

  var year = date.getFullYear() % 100;
  if (year < 10) year = "0" + year;

  var hour = date.getHours();
  if (hour < 10) hour = "0" + hour;

  var minute = date.getMinutes();
  if (minute < 10) minute = "0" + minute;

  return day + "." + month + "." + year + " " + hour + ":" + minute;
}