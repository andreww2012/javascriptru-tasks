// Напишите функцию sum, которая будет работать так:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// Количество скобок может быть любым.

function sum(a) {
  var sum = 0;

  function add(b) {
    sum += b;
    return add;
  };

  add.toString = function() {
      return sum;
  }

  return add;
}