// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Предполагается, что посетитель вводит только числа.

var number;

do {
  number = prompt("Введите число, большее 100", "");
} while (number <= 100 && number != null);