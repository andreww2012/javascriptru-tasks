// Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];

function compareRev(a, b) {
  return b - a;
}

arr.sort(compareRev);

alert(arr);