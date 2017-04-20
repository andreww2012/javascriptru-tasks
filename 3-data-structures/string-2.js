// Напишите функцию checkSpam(str), которая возвращает true,
// если строка str содержит „viagra“ или „XXX“, а иначе false.

function checkSpam(str) {
  var strLow = str.toLowerCase();

  return !!(~strLow.indexOf("viagra") || ~strLow.indexOf("xxx"));
}
