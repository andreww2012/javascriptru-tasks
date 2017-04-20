// Создайте класс для холодильника Fridge(power), наследующий от Machine,
// с приватным свойством food и методами addFood(...), getFood():
// Приватное свойство food хранит массив еды.
// Публичный метод addFood(item) добавляет в массив food новую еду,
// доступен вызов с несколькими аргументами addFood(item1, item2...)
// для добавления нескольких элементов сразу.
// Если холодильник выключен, то добавить еду нельзя, будет ошибка.
// Максимальное количество еды ограничено power/100, где power –
// мощность холодильника, указывается в конструкторе. При попытке
// добавить больше – будет ошибка
// Публичный метод getFood() возвращает еду в виде массива, добавление или
// удаление элементов из которого не должно влиять на свойство
// food холодильника.

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

// НАЧАЛО РЕШЕНИЯ
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
}
