// Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс,
// но с использованием рекурсивного setTimeout вместо setInterval.

function printNumbersTimeout() {
  var i = 0;
  var timer = setTimeout(function print() {
    console.log(++i);
    if (i < 20) setTimeout(print, 100);
  }, 100);
}
