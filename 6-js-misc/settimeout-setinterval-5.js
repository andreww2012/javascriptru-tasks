// Напишите функцию throttle(f, ms) – «тормозилку», которая возвращает обёртку,
// передающую вызов f не чаще, чем раз в ms миллисекунд.
// У этой функции должно быть важное существенное отличие от debounce: если игнорируемый вызов оказался последним,
// т.е. после него до окончания задержки ничего нет – то он выполнится.

function throttle(f, ms) {
  var canRun = true;
  var currThis = null,
      currArgs = null;

  return function wrapper() {
    if (!canRun) {
      currThis = this;
      currArgs = arguments;
      return;
    }

    f.apply(this, arguments);
    canRun = false;

    setTimeout(function() {
      canRun = true;
      // Проверка именно на currArgs, потому что currThis м.б. всё равно равен null
      // currArgs не null, если декорированная функция запущена менее чем через ms мс после последнего запуска
      if (currArgs) {
        // Вызываем не функцию, а обёртку, чтобы создать задержку перед следующим запуском:
        // wrapper.apply(...) запустит функцию + сделает задержку
        wrapper.apply(currThis, currArgs);
        currArgs = currThis = null;
      }
    }, ms);
  };
}
