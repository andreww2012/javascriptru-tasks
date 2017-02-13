// В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
// В итоге должен работать такой код:
/*
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!
*/
// А вот так – всё в порядке:
/*
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
*/

function Machine(power) {
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };

}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  var parentEnable = this.enable;
  this.enable = function() {
      parentEnable();
      this.run();
    }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    // НАЧАЛО РЕШЕНИЯ
    if (!this._enabled) {
      throw new Error("Ошибка: кофеварка выключена");
    }
    // КОНЕЦ РЕШЕНИЯ

    setTimeout(onReady, 1000);
  };

}