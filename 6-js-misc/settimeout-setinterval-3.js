// Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f,
// задерживающую вызов на ms миллисекунд.
// Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.

function delay(f, ms) {
  return function() {
    var currThis = this;
    var currArgs = arguments;

    setTimeout(function() {
      f.apply(currThis, currArgs);
    }, ms);
  };
}
