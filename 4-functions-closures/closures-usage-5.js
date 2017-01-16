// Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
// в который входят только те элементы arr, для которых func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]".
// Использование должно быть таким:
// filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

function filter(arr, func) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function inBetween(a, b) {
  return function(arg) {
    return arg >= a && arg <= b;
  }
}

function inArray(arr) {
  return function(arg) {
    return arr.indexOf(arg) != -1;
  }
}