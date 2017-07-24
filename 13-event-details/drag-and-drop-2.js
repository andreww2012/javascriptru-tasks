// В этой задаче вы можете проверить своё понимание сразу нескольких аспектов
// Drag’n’Drop.
// Сделайте так, чтобы элементы с классом draggable можно было переносить
// мышкой. По окончании переноса элемент остаётся на том месте в документе, где
// его положили.
// Требования к реализации:
// * Должен быть 1 обработчик на document, использующий делегирование.
// * Если элементы подносят к вертикальным краям окна – оно должно
// прокручиваться вниз/вверх.
// * Горизонтальной прокрутки в этой задаче не существует.
// * Элемент при переносе, даже при резких движениях мышкой, не должен попасть
// вне окна.
// Демо: https://vk.cc/6RFz0R

document.onmousedown = (e) => {
  let target = e.target;

  if (!target.classList.contains("draggable")) {
    return;
  }

  let targetCoords = target.getBoundingClientRect();
  let shiftX = e.clientX - targetCoords.left;
  let shiftY = e.clientY - targetCoords.top;

  target.style.position = "fixed";
  document.body.appendChild(target);
  onMouseMove(e);

  target.ondragstart = () => false;

  function onMouseMove(e) {
    let newX = Math.min(
      Math.max(0, e.clientX - shiftX),
      document.documentElement.clientWidth - target.offsetWidth
    );

    let newY = e.clientY - shiftY;
    let toShiftedTop = e.clientY - shiftY;
    let toShiftedBottom = document.documentElement.clientHeight -
      target.offsetHeight - e.clientY;

    // Добавляем прокрутку. Прокручиваем на константу для простоты
    if (toShiftedTop < 0) {
      window.scrollBy(0, -8);
      newY -= toShiftedTop;
    // Нужно прокрутить вниз
    } else if (toShiftedBottom < 0) {
      window.scrollBy(0, 8);
      newY = e.clientY + toShiftedBottom;
    }

    target.style.left = newX + "px";
    target.style.top = newY + "px";
  }

  function onMouseUp(e) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    target.ondragstart = null;

    // Фиксим вертикальную позицию (горизонтальной прокрутки нет!)
    target.style.top = parseInt(target.style.top) + window.pageYOffset + "px";
    target.style.position = "absolute";
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  return false;
};
