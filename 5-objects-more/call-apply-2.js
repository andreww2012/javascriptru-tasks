// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

function applyAll(func) {
  func.apply(this, [].slice.call(arguments, 1));
}
