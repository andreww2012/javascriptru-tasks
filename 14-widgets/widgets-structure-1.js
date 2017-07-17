// Создайте компонент «Часы» (Clock).
// Интерфейс:
/*
var clock = new Clock({
  elem: элемент
});

clock.start(); // старт
clock.stop(); // стоп
*/
// Остальные методы, если нужны, должны быть приватными.
// При нажатии на alert часы должны приостанавливаться, а затем продолжать идти
// с правильным временем.

function Clock(options) {
  let clock = options.elem;

  let timerId;
  let works = false;

  let hoursSpan = clock.children[0];
  let minutesSpan = clock.children[1];
  let secondsSpan = clock.children[2];

  function render() {
    let date = new Date();

    hoursSpan.innerHTML = date.getHours();
    minutesSpan.innerHTML = date.getMinutes();
    secondsSpan.innerHTML = date.getSeconds();
  }

  this.start = function() {
    if (works) {
      return;
    }

    render();
    timerId = setInterval(render, 1000);
    works = true;
  };

  this.stop = function() {
    clearInterval(timerId);
    works = false;
  }
}
