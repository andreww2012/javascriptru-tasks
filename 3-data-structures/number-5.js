// Напишите код для генерации случайного числа от min до max, не включая max.

function randFromInterval(min, max) {
  return min + Math.random() * (max - min);
}
