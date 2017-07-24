// Напишите функцию insertAfter(elem, refElem), которая добавит elem
// после узла refElem.

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
