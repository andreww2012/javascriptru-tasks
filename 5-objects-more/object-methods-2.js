// Есть объект «лестница» ladder:

/*
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};
*/

// Сейчас, если нужно последовательно вызвать несколько методов объекта,
// это можно сделать так:

/*
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

*/

// Модифицируйте код методов объекта, чтобы вызовы можно было делать
// цепочкой, вот так:

// ladder.up().up().down().up().down().showStep(); // 1

// Как видно, такая запись содержит «меньше букв» и может быть более наглядной.

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }
};
