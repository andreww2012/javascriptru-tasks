// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:

// Неточный вариант: будут ошибки, связанные с представлением чисел в памяти
function getDecimalApprox1(num) {
  return (num >= 0) ? num - Math.floor(num) : Math.ceil(num) - num;
}

// Ещё один неточный вариант
function getDecimalApprox2(num) {
  return (num >= 0) ? (num % 1) : (-num % 1);
}

// Работающий вариант
function getDecimal(num) {
  var numString = String(num);
  var decPointPos = numString.indexOf(".");

  numString = numString.substring(decPointPos);
  
  return (decPointPos == -1) ? 0 : +numString;
}