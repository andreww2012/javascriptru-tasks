// Напишите условие if для проверки того факта, что age НЕ находится
// между 14 и 90 включительно. Сделайте два варианта условия: первый с
// использованием оператора НЕ !, второй – без этого оператора.

var age = 5;

if (!(age >= 14 && age <= 90)) {
  alert(age + " не принадлежит промежутку [14;90]");
}

if (age < 14 || age > 90) {
  alert(age + " не принадлежит промежутку [14;90]");
}
