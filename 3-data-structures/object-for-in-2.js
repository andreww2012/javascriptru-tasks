// Есть объект salaries с зарплатами. Напишите код, который выведет
// сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var salariesSum = 0;
for (var employee in salaries) {
  salariesSum += salaries[employee];
}

alert(salariesSum);
