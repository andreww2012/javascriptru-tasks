// В объекте есть свойство className, которое содержит список «классов» – слов,
// разделённых пробелом.
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls,
// но только если его там еще нет.

function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(" ") : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return;
  }

  classes.push(cls);
  obj.className = classes.join(" ");
}
