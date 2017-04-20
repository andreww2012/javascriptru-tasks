// Из внешнего кода мы хотели бы иметь возможность понять –
// запущена кофеварка или нет.
// Для этого добавьте кофеварке публичный метод isRunning(),
// который будет возвращать true, если она запущена и false, если нет.
// Исходный код возьмите из решения предыдущей задачи.

// ЧТО В РЕШЕНИИ: добавлены выражения, связанные с переменной isRunning
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var isRunning = false;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    isRunning = true;

    setTimeout(function() {
      onReady();
      isRunning = false;
    }, getTimeToBoil());
  };

  this.setOnReady = function(func) {
    onReady = func;
  };

  // Собственно функция
  this.isRunning = function() {
    return isRunning;
  };

}
