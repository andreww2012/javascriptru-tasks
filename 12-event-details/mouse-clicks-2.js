// Есть кликабельное JavaScript-дерево UL/LI (см. задачу Раскрывающееся дерево,
// event-delegation-2.js, раздел 11).
// При клике на заголовке его список его детей скрывается-раскрывается.
// Однако, проблема в том, что скрытие-раскрытие происходит даже при клике вне
// заголовка, на пустом пространстве справа от него.
// - Как скрывать/раскрывать детей только при клике на заголовок?
// В задаче Раскрывающееся дерево это решено так: заголовки завёрнуты в
// элементы SPAN и проверяются клики только на них. Представим на минуту, что
// мы не хотим оборачивать текст в SPAN, а хотим оставить как есть. Например,
// по соображениям производительности, если дерево и так очень большое, ведь
// оборачивание всех заголовков в SPAN увеличит количество DOM-узлов в 2 раза.
// Решите задачу без обёртывания заголовков в SPAN, используя работу с
// координатами.
// Исходный документ содержит кликабельное дерево.
// P.S. Задача – скорее на сообразительность, однако подход может быть полезен
// в реальной жизни.

// Новые участки кода сопровождены комментариями.

let tree = document.getElementsByClassName("tree")[0];

// Обрамление текста спанами - способ из той задачи
/*
let lis = tree.getElementsByTagName("li");

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
*/

tree.onclick = function(e) {
  let target = e.target;
  let node = target.getElementsByTagName('ul')[0];

  if (!node) {
    return;
  }

  let span = document.createElement("span");
  let text = target.firstChild;

  target.insertBefore(span, text);
  span.appendChild(text);

  let clickedOnTitle = document.elementFromPoint(e.clientX, e.clientY) == span;

  target.replaceChild(text, span);

  if (!clickedOnTitle) {
    return;
  }

  node.hidden = !node.hidden;
};
