// Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
// Эта задача состоит из двух частей, которые можно решать одна за другой.
// 1) Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.
// Пример использования:
/*var calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10*/
// 2) Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
// Например, добавим операции умножить *, поделить / и возвести в степень **:
/*var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8*/
// Поддержка скобок и сложных математических выражений в этой задаче не требуется.
// Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
// Предусмотрите обработку ошибок. Какая она должна быть – решите сами.

function Calculator() {
  var methods = {
    "+": function(a, b) {
      return a + b;
    },
    "-": function(a, b) {
      return a - b;
    }
  };

  this.calculate = function(str) {
    var expr = str.split(" ");
    var arg1 = expr[0], arg2 = expr[2];
    var operation = expr[1];

    if (!methods[operation] || isNaN(arg1) || isNaN(arg2)) {
      return NaN;
    }

    return methods[operation](+arg1, +arg2);
  };

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}