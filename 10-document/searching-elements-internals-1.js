// Какой метод поиска элементов работает быстрее:
// getElementsByTagName(tag) или querySelectorAll(tag)?
// Напишите код, который измеряет разницу между ними.

const TIMES = 30000;

function bench(func, times) {
  var date = new Date();
  for (var i = 0; i < times; i++) {
    func();
  }
  return new Date() - date;
}

function benchGetElementsById() {
  var elements = document.getElementsByTagName("span");
  var length = elements.length;
  for (var i = 0; i < length; i++) {
    elements[i]; // Просто что-то делаем..
  }
}


function benchQuerySelectorAll() {
  var elements = document.querySelectorAll("span");
  var length = elements.length;
  for (var i = 0; i < length; i++) {
    elements[i]; // Просто что-то делаем..
  }
}

console.log("getElementById: " + bench(benchGetElementsById, TIMES) + "ms");
console.log("querySelectorAll: " + bench(benchQuerySelectorAll, TIMES) + "ms");
console.log("Tested " + TIMES + " times.");
