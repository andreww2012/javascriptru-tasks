// Есть реализация часиков на прототипах. Создайте класс, расширяющий её,
// добавляющий поддержку параметра precision, который будет задавать частоту
// тика в setInterval. Значение по умолчанию: 1000.
// Для этого класс Clock надо унаследовать.
// Исходный класс Clock менять нельзя.
// Пусть конструктор потомка вызывает конструктор родителя.
// Это позволит избежать проблем при расширении Clock новыми опциями.

// РЕАЛИЗАЦИЯ КЛАССА Clock (class-inheritance-1.js)
function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.log(output);
}

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
  this._render();
  this._timer = setInterval(this._render.bind(this), 1000);
}

// НАЧАЛО РЕШЕНИЯ
function ExtendedClock(options) {
  Clock.apply(this, arguments);
  this._precision = +options.precision || 1000;
}

ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.constructor = ExtendedClock;

ExtendedClock.prototype.start = function() {
  this._render();
  this._timer = setInterval(this._render.bind(this), this._precision);
}
