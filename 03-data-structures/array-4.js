// Напишите код для вывода alert случайного значения из массива

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

// Из number-6.js
function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

alert(arr[randomInteger(0, arr.length - 1)]);
