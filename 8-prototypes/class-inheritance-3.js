// Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.
// Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.
// При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру,
// открытие завершается вызовом open() родителя.
// Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому close.
// Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.

// ИСХОДНЫЙ ТЕКСТ
function Menu(state) {
  this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
  this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
  this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.STATE_OPEN:
      return 'открыто';

    case Menu.STATE_CLOSED:
      return 'закрыто';
  }
};

Menu.prototype.showState = function() {
  alert(this._stateAsString());
};

// НАЧАЛО РЕШЕНИЯ
function AnimatingMenu(state) {
  Menu.apply(this, arguments);
}

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;
AnimatingMenu.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
  this._state = AnimatingMenu.STATE_ANIMATING;
  var currThis = this;
  this._timerId = setInterval(function() {
    Menu.prototype.open.call(currThis);
  }, 1000);
}

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timerId);
  Menu.prototype.close.call(this);
}

AnimatingMenu.prototype._stateAsString = function() {
  switch (this._state) {
    case AnimatingMenu.STATE_ANIMATING:
      return "анимация";
    default:
      return Menu.prototype._stateAsString.call(this);
  }
};