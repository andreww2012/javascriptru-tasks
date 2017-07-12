// Создайте кнопку навигации, которая помогает при прокрутке страницы.
// Работать должна следующим образом:
// * Пока страница промотана меньше чем на высоту экрана вниз – кнопка не видна.
// * При промотке страницы вниз больше, чем на высоту экрана, появляется кнопка
// «стрелка вверх».
// * При нажатии на нее страница прыгает вверх, но не только. Дополнительно,
// кнопка меняется на «стрелка вниз» и при клике возвратит на старое место.
// Если же в этом состоянии посетитель сам прокрутит вниз больше, чем один
// экран, то она вновь изменится на «стрелка вверх».
// Должен получиться удобный навигационный помощник.

let updown = document.getElementById("updown");
let prevPageYOffset = 0;

document.onscroll = () => {
  const pageHeight = document.documentElement.clientHeight;
  const currPageYOffset = window.pageYOffset;

  if (updown.className == "up" && currPageYOffset < pageHeight) {
    updown.className = "";
  } else if (currPageYOffset > pageHeight) {
    updown.className = "up";
  }
};

updown.onclick = () => {
  if (updown.className == "up") {
    prevPageYOffset = window.pageYOffset;
    window.scrollTo(window.pageXOffset, 0);
    updown.className = "down";
  } else {
    window.scrollTo(window.pageXOffset, prevPageYOffset);
    updown.className = "up";
  }
};
