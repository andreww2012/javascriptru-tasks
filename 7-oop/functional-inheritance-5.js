// Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку..
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

  // ПЕРЕОПРЕДЛЕНИЕ МЕТОДА:
  parentDisable = this.disable;
  this.disable = function() {
    if (food.length) {
      throw new Error("Ошибка: в холодильнике есть еда");
    }

    parentDisable();
  }

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

  this.filterFood = function(func) {
    return food.filter(func);
  };

  this.removeFood = function(item) {
    if ((pos = food.indexOf(item)) != -1) {
      food.splice(pos, 1);
    }
  };
}
