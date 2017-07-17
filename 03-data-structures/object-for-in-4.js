// Создайте функцию multiplyNumeric, которая получает объект
// и умножает все численные свойства на 2.

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (var currProp in obj) {
    if (isNumeric(obj[currProp])) {
      obj[currProp] *= 2;
    }
  }
}
