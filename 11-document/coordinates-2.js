// Создайте функцию positionAt(anchor, position, elem), которая позиционирует
// элемент elem, в зависимости от position, сверху ("top"), справа ("right")
// или снизу ("bottom") от элемента anchor.
// Используйте её, чтобы сделать функцию showNote(anchor, position, html),
// которая показывает элемент с классом note и текстом html на позиции position
// рядом с элементом anchor.

function positionAt(anchor, position, elem) {
  let anchorPos = anchor.getBoundingClientRect();
  let anchorPosX = anchorPos.left;
  let anchorPosY = anchorPos.top;
  let elemPosX, elemPosY;

  switch (position) {
    case "top":
      elemPosX = anchorPosX;
      elemPosY = anchorPosY - elem.offsetHeight;
    break;

    case "right":
      elemPosX = anchorPosX + anchor.offsetWidth;
      elemPosY = anchorPosY;
    break;

    case "bottom":
      elemPosX = anchorPosX;
      elemPosY = anchorPosY + anchor.offsetHeight;
    break;
  }

  elem.style.position = "fixed";
  elem.style.left = elemPosX + "px";
  elem.style.top = elemPosY + "px";
}

function showNote(anchor, position, html) {
  let div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild("div");

  positionAt(anchor, position, div);
}
