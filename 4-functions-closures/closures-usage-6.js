//Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:
/*
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
*/
// Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано.
// Предложите несколько вариантов исправления.

// Один из вариантов - использование функции как объекта
function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {
    shooter.number = i;
    var shooter = function sh() {
      alert(sh.number);
    }

    shooters.push(shooter);
  }

  return shooters;
}

// Второй вариант
function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++) {

    var shooter = (function(arg) {
      return function() {
        alert(arg);
      };
    })(i);

    shooters.push(shooter);
  }

  return shooters;
}