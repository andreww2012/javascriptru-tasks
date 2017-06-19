// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же
// числа элементов, в котором на каждой позиции должна быть сумма элементов
// arr до этой позиции включительно.
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

function getSums(arr) {
  var sums = [];
  if (!arr.length) return sums;

  var arrSum = arr.reduce(function(sum, curr) {
    sums.push(sum);
    return sum + curr;
  });
  sums.push(arrSum); // последняя сумма

  return sums;
}
