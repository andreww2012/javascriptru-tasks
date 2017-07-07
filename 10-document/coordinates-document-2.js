// Модифицируйте решение задачи Разместить заметку рядом с элементом
// (coordinates-2.js), чтобы при прокрутке страницы заметка не убегала от
// элемента.
// Используйте для этого координаты относительно документа и position:absolute
// вместо position:fixed.
// В качестве исходного документа используйте решение задачи Разместить заметку
// рядом с элементом, для тестирования прокрутки добавьте стиль <body
// style="height: 2000px">.

// ИЗМЕНЕНИЯ ОТМЕЧЕНЫ КОММЕНТАРИЯМИ

// (1) Добавляем функцию получения координат относительно всей страницы,
// забивая на древние IE :)
function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function positionAt(anchor, position, elem) {
  // let anchorPos = anchor.getBoundingClientRect(); (2) убираем лишнее
  // Самое главное изменение!
  let anchorPosX = getCoords(anchor).left; // (3) anchorPos -> getCoords(anchor)
  let anchorPosY = getCoords(anchor).top; // (4) anchorPos -> getCoords(anchor)
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

  // (5) fixed -> absolute, вообще можно просто задать класс с подходящими
  // стилями, как это было сделано в решении на сайте
  elem.style.position = "absolute";
  elem.style.left = elemPosX + "px";
  elem.style.top = elemPosY + "px";
}

function showNote(anchor, position, html) {
  let div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild("div");

  positionAt(anchor, position, div);
}
