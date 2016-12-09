// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var maxSalary = 0, maxSalaryOwner;

for (var employee in salaries) {
  if (salaries[employee] > maxSalary) {
    maxSalary = salaries[employee];
    maxSalaryOwner = employee;
  }
}

alert((maxSalary == 0) ? "нет сотрудников" : maxSalaryOwner);