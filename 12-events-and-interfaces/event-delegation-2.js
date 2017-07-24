// Создайте дерево, которое по клику на заголовок скрывает-показывает детей.
// Требования:
// * Использовать делегирование.
// * Клик вне текста заголовка (на пустом месте) ничего делать не должен.
// * При наведении на заголовок – он становится жирным, реализовать через CSS.

let tree = document.getElementsByClassName("tree")[0];
let lis = tree.getElementsByTagName("li");

// Обрамление текста спанами
for (let i = 0; i < lis.length; i++) {
  let li = lis[i];

  let span = document.createElement("span");
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

tree.onclick = function(e) {
  let target = e.target;
  let ul = target.nextElementSibling;

  if (target.tagName == "SPAN" && ul) {
    console.log("here");
    ul.hidden = !ul.hidden;
  }
};
