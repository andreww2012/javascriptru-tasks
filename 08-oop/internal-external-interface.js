// Улучшите готовый код кофеварки, который дан ниже:
// добавьте в кофеварку публичный метод stop(),
// который будет останавливать кипячение (через clearTimeout).
// P.S. Текущую температуру воды вычислять и хранить не требуется.
// P.P.S. При решении вам, скорее всего, понадобится добавить приватное
// свойство timerId, которое будет хранить текущий таймер.

function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;
  // Добавлено приватное свойство
  var timerId;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    // Было:
    // setTimeout(onReady, getBoilTime());
    timerId = setTimeout(onReady, getBoilTime());
  };

  // ДОБАВЛЕНО:
  this.stop = function() {
    clearTimeout(timerId);
  };

}
