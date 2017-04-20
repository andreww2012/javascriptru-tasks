// Создайте декоратор makeLogging(func, log), для функции func возвращающий
// обёртку, которая при каждом вызове добавляет её аргументы в массив log.
// Условие аналогично задаче Логирующий декоратор (1 аргумент),
// но допускается func с любым набором аргументов.

function makeLogging(f, log) {
  return function() {
    log.push([].slice.call(arguments));
    return f.apply(this, arguments);
  };
}
