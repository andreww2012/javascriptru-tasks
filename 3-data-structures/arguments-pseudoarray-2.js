// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += +arguments[i];
  }

  return result;
}