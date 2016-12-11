// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) return i;
  }

  return -1;
}