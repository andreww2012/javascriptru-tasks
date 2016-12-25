// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  var uniqueness = {}, cleaned = [];

  for (var i = 0; i < arr.length; i++) {
    uniqueness[arr[i]] = true;
  }

  return Object.keys(uniqueness);
}