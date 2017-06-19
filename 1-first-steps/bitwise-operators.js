// Напишите функцию isInteger(num), которая возвращает true,
// если num – целое число, иначе false.

function isInteger(num) {
  return ~~num === num;
}

// 2 вариант
function isInteger(num) {
  return (num ^ 0) === num;
}
