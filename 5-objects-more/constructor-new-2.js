// Напишите функцию-конструктор Calculator, которая создаёт объект
// с тремя методами:
// Метод read() запрашивает два значения при помощи prompt
// и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.
// Пример использования:

/*
var calculator = new Calculator();
calculator.read();
alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
*/

function Calculator() {
  this.read = function() {
    this.val1 = +prompt("Первое число:", 2);
    this.val2 = +prompt("Второе число:", 2);
  };

  this.sum = function() {
    return this.val1 + this.val2;
  };

  this.mul = function() {
    return this.val1 * this.val2;
  };
}
