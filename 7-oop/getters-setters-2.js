// Добавьте кофеварке геттер для приватного свойства power, чтобы
// внешний код мог узнать мощность кофеварки.
// Исходный код:

function CoffeeMachine(power, capacity) {
  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  // НАЧАЛО РЕШЕНИЯ
  this.getPower = function() {
    return power;
  }

}
