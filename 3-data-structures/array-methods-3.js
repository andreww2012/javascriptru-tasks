// У объекта есть свойство className, которое хранит список «классов» – слов,
// разделенных пробелами.
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls,
// если он есть.
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать
// дублирование класса в строке.

function removeClass(obj, cls) {
  if (!(className in obj)) return;

  var classes = obj.className.split(" ");

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i--, 1);
    }
  }

  obj.className = classes.join(" ");
}
