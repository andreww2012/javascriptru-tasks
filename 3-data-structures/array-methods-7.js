// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5];

function compareRand(a, b) {
  return Math.random() - 0.5;
}

arr.sort(compareRand);

alert(arr);