// При наведении мыши на элемент, на нём возникает событие mouseover, при
// удалении мыши с элемента – событие mouseout.
// Зная это, напишите JS-код, который будет делать так, что при наведении на
// элемент, если у него есть атрибут data-tooltip – над ним будет показываться
// подсказка с содержимым этого атрибута.
// В этой задаче можно полагать, что в элементе с атрибутом data-tooltip –
// только текст, то есть нет подэлементов.
// Детали оформления:
// * Подсказка должна появляться при наведении на элемент, по центру и на
// небольшом расстоянии сверху. При уходе курсора с элемента – исчезать.
// * Текст подсказки брать из значения атрибута data-tooltip. Это может быть
// произвольный HTML.
// * Оформление подсказки должно задаваться CSS.
// * Подсказка не должна вылезать за границы экрана, в том числе если страница
// частично прокручена. Если нельзя показать сверху – показывать снизу элемента.
// Важно: нужно использовать приём разработки «поведение», то есть поставить
// обработчик (точнее два) на document, а не на каждый элемент.
// Плюс этого подхода – динамически добавленные в DOM позже элементы
// автоматически получат этот функционал.

let tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.hidden = true;
document.body.appendChild(tooltip);

function toggleTooltip(e) {
  let target = e.target;
  let tooltipText = target.dataset.tooltip;

  if (!tooltipText) {
    return;
  }

  if (e.type == "mouseout") {
    tooltip.hidden = true;
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
}

document.addEventListener("mouseover", toggleTooltip);
document.addEventListener("mouseout", toggleTooltip);
