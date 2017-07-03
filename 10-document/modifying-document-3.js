// Напишите функцию removeChildren, которая удаляет всех потомков элемента.

function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}
