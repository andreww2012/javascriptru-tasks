// Расширьте предыдущую задачу Разместить заметку рядом с элементом (absolute)
// (coordinates-document-2.js): научите функцию positionAt(anchor, position,
// elem) вставлять elem внутрь anchor.
// Новые значения position:
// top-out, right-out, bottom-out – работают так же, как раньше, то есть
// вставляют elem над/справа/под anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: к верхней
// границе/правой/нижней.
// В качестве исходного документа возьмите решение задачи Разместить заметку
// рядом с элементом (absolute) (coordinates-document-2.js).

// ИЗМЕНЕНИЯ ОТМЕЧЕНЫ КОММЕНТАРИЯМИ

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function positionAt(anchor, position, elem) {
  let anchorPosX = getCoords(anchor).left;
  let anchorPosY = getCoords(anchor).top;
  let elemPosX, elemPosY;

  switch (position) {
    case "top-out": // (1) переименование top -> top-out
      elemPosX = anchorPosX;
      elemPosY = anchorPosY - elem.offsetHeight;
    break;

    case "right-out": // (2) переименование right -> right-out
      elemPosX = anchorPosX + anchor.offsetWidth;
      elemPosY = anchorPosY;
    break;

    case "bottom-out": // (3) переименование bottom -> bottom-out
      elemPosX = anchorPosX;
      elemPosY = anchorPosY + anchor.offsetHeight;
    break;

    // (4) Три новых значения:
    case "top-in":
      elemPosX = anchorPosX;
      elemPosY = anchorPosY;
    break;

    case "right-out":
      elemPosX = anchorPosX + anchorWidth - elem.offsetWidth;
      elemPosY = anchorPosY;
    break;

    case "bottom-out":
      elemPosX = anchorPosX;
      elemPosY = anchorPosY + anchorHeight - elem.offsetHeight;
    break;
  }

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
