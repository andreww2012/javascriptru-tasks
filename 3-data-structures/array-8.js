// Реализуйте «Решето Эратосфена» в JavaScript, используя массив.
// Найдите все простые числа до 100 и выведите их сумму.

var N = 100;
var MAX_NUM = Math.ceil(Math.sqrt(N));

var numbers = [];

for (var i = 2; i < N; i++) {
  numbers[i] = true;
}


var currPrime = 2;

do {

  for (i = currPrime * currPrime; i < N; i += currPrime) {
    numbers[i] = false;
  }

  for (i = currPrime + 1; i < N; i++) {
    if (numbers[i]) break;
  }

  currPrime = i;

} while (currPrime < MAX_NUM);


var sum = 0;

for (i = 2; i < N; i++) {
  sum += numbers[i] && i;
  // Альтернативный вариант:
  // if (numbers[i]) {
  //   sum += i;
  // }
}

alert(sum);