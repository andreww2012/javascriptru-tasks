// Напишите JS-код, который будет показывать всплывающую подсказку над
// элементом, если у него есть атрибут data-tooltip.
// Условие аналогично задаче Поведение "подсказка", но здесь необходима
// поддержка вложенных элементов. При наведении показывается самая вложенная
// подсказка.
// Вы можете использовать как заготовку решение задачи Поведение "подсказка"
// (behaviour.html в 11 разделе)

let tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.hidden = true;
document.body.appendChild(tooltip);

document.onmouseover = function(e) {
  let target = e.target;
  let tooltipText;

  while (target != this) {
    tooltipText = target.dataset.tooltip;
    if (tooltipText) {
      break;
    }
    target = target.parentNode;
  }

  if (!tooltipText) {
    return;
  }

  tooltip.innerHTML = tooltipText;
  tooltip.hidden = false;

  let tooltipPosX, tooltipPosY;
  let targetCoords = target.getBoundingClientRect();

  tooltipPosX = Math.max(
    0,
    targetCoords.left + (target.offsetWidth - tooltip.offsetWidth) / 2
  );

  tooltipPosY = targetCoords.top - tooltip.offsetHeight;
  if (tooltipPosY < 0) {
    tooltipPosY = targetCoords.bottom;
  }

  tooltip.style.left = tooltipPosX + "px";
  tooltip.style.top = tooltipPosY + "px";
};

document.onmouseout = function(e) {
  tooltip.hidden = true;
};
