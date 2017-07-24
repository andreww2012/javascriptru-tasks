// Сделайте так, чтобы при прокрутке колёсиком мыши над элементом, он
// масштабировался.
// Масштабирование обеспечивайте при помощи свойства CSS transform:
/*
// увеличение в 1.5 раза
elem.style.transform = elem.style.WebkitTransform =
  elem.style.MsTransform = 'scale(1.5)';
*/

let elem = document.getElementById("text");

if ("onwheel" in document) {
  elem.addEventListener("wheel", onWheelScale);
} else if ("onmousewheel" in document) {
  elem.addEventListener("mousewheel", onWheelScale);
} else {
  elem.addEventListener("MozMousePixelScroll", onWheelScale);
}

// Пример использует кол-во "прокрученных" пикселей, на самом деле можно
// каждый раз изменять на какую-то константу значение scale.
function onWheelScale(e) {
  e = e || window.event;

  const pixelsScrolled = e.deltaY || e.detail || e.wheelData;
  const elemHeight = elem.offsetHeight;

  if (!elem.style.transform) {
    elem.style.transform = "scale(1)";
  }

  // Стоит "минус", чтобы инвертировать изменение масштаба (крутить вверх =
  // увеличивать, а не уменьшать, крутить вниз = уменьшать)
  const scaleCoeff = parseFloat(elem.style.transform.split("(")[1])
    - pixelsScrolled / elemHeight;

  elem.style.transform = "scale(" + scaleCoeff + ")";

  e.preventDefault();
}
