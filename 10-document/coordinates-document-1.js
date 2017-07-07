// Напишите функцию getDocumentScroll(), которая возвращает объект с
// информацией о текущей прокрутке и области видимости.
// Свойства объекта-результата:
// * top – координата верхней границы видимой части (относительно документа).
// * bottom – координата нижней границы видимой части (относительно документа).
// * height – полная высота документа, включая прокрутку.
// В этой задаче учитываем только вертикальную прокрутку: горизонтальная
// делается аналогично, а нужна сильно реже.

function getDocumentScroll() {
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  return {
    top: window.pageYOffset,
    bottom: window.pageYOffset + document.documentElement.clientHeight,
    height: scrollHeight
  }
}
