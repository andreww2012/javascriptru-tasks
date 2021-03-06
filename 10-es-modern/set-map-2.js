// Это не решение задачи, а примеры использования новых возможностей плюс их
// краткое описание. Записываю для себя.
// Полная статья: http://learn.javascript.ru/set-map

// 1. Set
// Set – коллекция для хранения множества значений, причём каждое значение
// может встречаться лишь один раз.
let set = new Set();

// 2. Основные методы и свойства Set
let vasya = {name: "Вася"}, petya = {name: "Петя"}, dasha = {name: "Даша"};
set.add(vasya); set.add(petya); set.add(dasha); set.add(vasya); set.add(petya);
alert(set.size); // 3
// Остальные методы:
// set.delete(item) – удаляет item из коллекции, возвращает true, если он там
// был, иначе false.
// set.has(item) – возвращает true, если item есть в коллекции, иначе false.
// set.clear() – очищает set.

// 3. Перебор Set
// Перебор Set осуществляется через forEach или for..of аналогично Map.
// В Set у функции в .forEach три аргумента: значение, ещё раз значение, и
// затем сам перебираемый объект set.
// Так сделано для совместимости с Map, где у .forEach-функции также три
// аргумента. Но в Set первые два всегда совпадают и содержат очередное
// значение множества.
let set_ = new Set(["апельсины", "яблоки", "бананы"]);
set_.forEach((value, valueAgain, set) => { // то же, что: for(let value of set)
  alert(value); // апельсины, затем яблоки, затем бананы
});
