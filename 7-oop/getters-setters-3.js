// Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
// При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.
// Исходный код:

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

  // НАЧАЛО РЕШЕНИЯ
  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  }

}
