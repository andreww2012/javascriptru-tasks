// Напишите код, который отсортирует массив объектов people по полю age.
// Выведите список имён в массиве после сортировки.

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka];

function compareByAge(a, b) {
  return a.age - b.age;
}

people.sort(compareByAge);

for (var i = 0; i < people.length; i++) {
  alert(people[i].name);
}
