// 1. Сделайте список, элементы которого можно выделять кликом.
// 2. Добавьте мульти-выделение. Если клик с нажатым Ctrl (Cmd под Mac), то
// элемент добавляется-удаляется из выделенных.
// 3. Добавьте выделение промежутков. Если происходит клик с нажатым Shift, то
// к выделению добавляется промежуток элементов от предыдущего кликнутого до
// этого. При этом не важно, какое именно действие делал предыдущий клик. Это
// похоже на то, как работает файловый менеджер в ряде ОС, но чуть проще, так
// как конкретная реализация выделений различается у разных ОС, и её точное
// воспроизведение не входит в эту задачу.
// P.S. В этой задаче можно считать, что в элементах списка может быть только
// текст, без вложенных тегов.
// P.P.S. Обработка одновременного нажатия Ctrl(Cmd) и Shift может быть любой.

let list = document.getElementsByTagName("ul")[0];
let listItems = list.children;
let lastClickedElem = null;

list.onclick = function(e) {
  let target = e.target;

  if (target.tagName != "LI" || e.which != 1) {
    return;
  }

  if (e.shiftKey && lastClickedElem) {
    // target предшествует lastClickedElem?
    if (target.compareDocumentPosition(lastClickedElem) & 4) {
      for (let i = target; i != lastClickedElem; i = i.nextElementSibling) {
        i.classList.add("selected");
      }
    } else {
      for (let i = target; i != lastClickedElem; i = i.previousElementSibling) {
        i.classList.add("selected");
      }
    }

    i.classList.add("selected");
  } else if (e.ctrlKey || e.metaKey) {
    target.classList.toggle("selected");
  } else {
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("selected");
    }

    target.classList.add("selected");
  }

  lastClickedElem = target.classList.contains("selected") ? target : null;
};

list.onmousedown = function() {
  return false;
};
