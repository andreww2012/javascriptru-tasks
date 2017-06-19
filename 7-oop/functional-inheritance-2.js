// Когда кофеварку выключают – текущая варка кофе должна останавливаться.
// Например, следующий код кофе не сварит:

/*
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
*/

// Реализуйте это на основе решения предыдущей задачи.

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
  // ЧАСТЬ РЕШЕНИЯ: добавляем приватное свойство "ID таймера"
  var timerId;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  var parentEnable = this.enable;
  this.enable = function() {
      parentEnable();
      this.run();
    }

  function onReady() {
    alert("Кофе готово!");
  }

  this.run = function() {
    if (!this._enabled) {
      throw new Error("Ошибка: кофеварка выключена");
    }

    // ЧАСТЬ РЕШЕНИЯ: записываем в переменную ID таймера
    timerId = setTimeout(onReady, 1000);
  };

  // ОСНОВНАЯ ЧАСТЬ РЕШЕНИЯ
  var parentDisable = this.disable;
  this.disable = function() {
    parentDisable();
    clearTimeout(timerID);
  };

}
