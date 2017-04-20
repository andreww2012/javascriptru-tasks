// Добавьте в холодильник методы:
// Публичный метод filterFood(func), который возвращает всю еду,
// для которой func(item) == true
// Публичный метод removeFood(item), который удаляет еду item из холодильника.
// В качестве исходного кода используйте решение предыдущей задачи.

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var food = [];

  this.addFood = function() {
    if (!this._enabled) {
      throw new Error("Ошибка: холодильник выключен");
    }

    if (food.length + arguments.length > Math.floor(this._power / 100)) {
      throw new Error("Ошибка: нельзя добавить слишком много еды");
    }

    for (var i = 0; i < arguments.length; i++) {
      food.push(arguments[i]);
    }
  };

  this.getFood = function() {
    return food.slice();
  };

  // НАЧАЛО РЕШЕНИЯ
  this.filterFood = function(func) {
    return food.filter(func);
  };

  this.removeFood = function(item) {
    if ((pos = food.indexOf(item)) != -1) {
      food.splice(pos, 1);
    }
  };
}
