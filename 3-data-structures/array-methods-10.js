// Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в
// разном порядке:
// воз - зов, киборг - гробик, корсет - костер - сектор
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от
// анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое

function aclean(arr) {
  var anagrams = {}, arrCleaned = [];

  for (var i = 0; i < arr.length; i++) {
    // anagram_key будет совпадать у анаграмм
    var anagram_key = arr[i].toLowerCase().split("").sort().join();
    anagrams[anagram_key] = arr[i];
  }

  for (prop in anagrams) {
    arrCleaned.push(anagrams[prop]);
  }

  return arrCleaned;
}
