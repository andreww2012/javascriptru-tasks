// Реализовать следующий синтаксис сортировки массива объектов по полю:
// users.sort(byField('name'));
// Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, чтобы пример выше заработал.

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}