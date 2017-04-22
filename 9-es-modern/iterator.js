// Это не решение задачи, а примеры использования новых возможностей плюс их краткое описание.
// Записываю для себя. Полная статья: http://learn.javascript.ru/iterator

// 1. Понятие итераторов
// «Перебираемые» (итерируемые, iterable) объекты – это те, содержимое которых можно перебрать
// в цикле.
// Для перебора таких объектов добавлен новый синтаксис цикла: for..of. Примеры iterable-объектов:
// массивы, строки.
let arr = [1, 2, 3];
for (let value of arr) { alert(value); } // 1, затем 2, затем 3

// 2. Создание собственных итераторов
// Пусть есть некий объект, который надо «умным способом» перебрать. Для возможности использовать
// объект в for..of нужно создать в нём свойство с названием Symbol.iterator (системный символ).
// Метод Symbol.iterator должен возвращать объект, который умеет осуществлять перебор (итератор).
// У такого объекта должен быть метод next(), который возвращает объект со свойствами:
// value – очередное значение, done – равно false если есть ещё значения, и true – в конце.
let range = {from: 1, to: 5}
range[Symbol.iterator] = function() {
  let current = this.from, last = this.to;
  return {
    next() {
      if (current <= last) { return {done: false, value: current++}; } else { return {done: true}; }
    }
  }
};
for (let num of range) { alert(num); } // 1, затем 2, 3, 4, 5

// 3. Оператор spread ... и итераторы
// Оператор ... можно использовать с любым итерируемым объектом.
// В примере ниже ...range  автоматически превращает итерируемый объект в массив.
alert(Math.max(...range)); // произойдёт вызов Math.max(1,2,3,4,5);

// 4. Бесконечные итераторы
// Возможны и бесконечные итераторы. Так, пример выше при range.to = Infinity будет таковым.

// 5. Встроенные итераторы
// Встроенные в JavaScript итераторы можно получить и явным образом, прямым вызовом Symbol.iterator:
let str = "Hello";
// далее - то же, что и for (var letter of str) alert(letter);
let iterator = str[Symbol.iterator]();
while(true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // Выведет все буквы по очереди
}
