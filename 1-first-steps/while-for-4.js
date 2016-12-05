// Создайте код, который выводит все простые числа из интервала от 2 до 10.

// Первый вариант
nextNum: for (i = 2; i <= 10; i++) {
  for (j = 2; j < i; j++) {
    if (i % j == 0) continue nextNum;
  }
  alert(i);
}

// Второй вариант
var is_prime;

for (i = 2; i <= 10; i++) {
  is_prime = true;

  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      is_prime = false;
      break;
    }
  }

  if (is_prime) {
    alert(i);
  }
}