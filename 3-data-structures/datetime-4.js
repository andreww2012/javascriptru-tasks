// Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
// P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.

function getDateAgo(date, days) {
  var dateCopy = new Date(date);

  dateCopy.setDate( date.getDate() - days );
  return dateCopy.getDate();
}
