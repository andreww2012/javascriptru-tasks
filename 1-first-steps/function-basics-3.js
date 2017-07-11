// Напишите функцию pow(x,n), которая возвращает x в степени n.
// В этой задаче функция обязана поддерживать только натуральные значения n.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат
// pow(x,n).

function pow(x, n) {
  let res = x;

  for (let i = 1; i < n; i++) {
    res *= x;
  }

  return res;
}

let x = prompt("Введите x:", "");
let n = prompt("Введите целое n, большее 1:", "");

if (n <= 1 || (~~n != n)) {
  alert("Степень должна быть целой и больше 1");
} else {
  alert(x + "^" + n + " = " + pow(x, n));
}