// В большинстве браузеров если в процессе прокрутки textarea колёсиком мышки
// (или жестами) мы достигаем границы элемента, то прокрутка продолжается уже
// на уровне страницы (в Firefox при этом будет небольшая задержка перед
// продолжением прокрутки).
// То же самое происходит при прокрутке вверх.
// В интерфейсах редактирования, когда большая textarea является основным
// элементом страницы, такое поведение может быть неудобно.
// Для редактирования более оптимально, чтобы при прокрутке до конца textarea
// страница не «улетала» вверх и вниз.
// Задача:
// * Создать скрипт, который при подключении к документу исправлял бы поведение
// всех textarea, чтобы при прокрутке они не трогали документ.
// * Направление прокрутки – только вверх или вниз.
// * Редактор прокручивает только мышкой или жестами (на мобильных устройствах),
// прокрутку клавиатурой здесь рассматривать не нужно (хотя это и возможно).

if ("onwheel" in document) {
  document.addEventListener("wheel", onWheelFixTextarea);
} else if ("onmousewheel" in document) {
  document.addEventListener("mousewheel", onWheelFixTextarea);
} else {
  document.addEventListener("MozMousePixelScroll", onWheelFixTextarea);
}

function onWheelFixTextarea(e) {
  const target = e.target;

  if (target.nodeName != "TEXTAREA") {
    return;
  }

  const delta = e.deltaY || e.detail || e.wheelData;

  if (delta < 0 && target.scrollTop == 0) {
    e.preventDefault();
  }

  // Из-за погрешностей используем не сравнение, разность
  if (delta > 0
    && target.scrollHeight - target.clientHeight - target.scrollTop <= 1) {
    e.preventDefault();
  }
}
