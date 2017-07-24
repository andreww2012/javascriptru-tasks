// Напишите полифилл для метода remove для старых браузеров.
// Вызов elem.remove():
// Если у elem нет родителя – ничего не делает.
// Если есть – удаляет элемент из родителя.

if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function() {
    let parent = this.parentNode;

    if (parent) {
      parent.removeChild(this);
    }
  };
}
