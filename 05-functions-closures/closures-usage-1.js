// Сумма через замыкание: Напишите функцию sum, которая работает так:
// sum(a)(b) = a+b.

function sum(arg1) {
  return function(arg2) {
    return arg1 + arg2;
  };
}
