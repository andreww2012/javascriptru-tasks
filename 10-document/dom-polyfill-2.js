// Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего
// селектору css, не поддерживается некоторыми браузерами, например IE11-.
// Создайте для него полифилл.

if (!Element.prototype.closest) {
  Element.prototype.closest = function(css) {
    var node = this;

    while(node) {
      if (node.matches(css)) return node;
      node = node.parentElement;
    }

    return null;
  };
}
