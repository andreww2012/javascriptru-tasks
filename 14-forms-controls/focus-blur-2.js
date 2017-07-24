// Кликните по мышонку. Затем нажимайте клавиши со стрелками, и он будет
// двигаться: https://vk.cc/6Sq9Z
// В этой задаче запрещается ставить обработчики куда-либо, кроме элемента
// #mouse.
// Можно изменять атрибуты и классы в HTML.

let mouse = document.getElementById("mouse");
const mouseWidth = mouse.offsetWidth;
const mouseHeight = mouse.offsetHeight;

mouse.onclick = (e) => {
  mouse.style.left = mouse.getBoundingClientRect().left + "px";
  mouse.style.top = mouse.getBoundingClientRect().top + "px";
  mouse.style.position = "fixed";
}

mouse.onkeydown = (e) => {
  const left = parseInt(mouse.getBoundingClientRect().left);
  const top = parseInt(mouse.getBoundingClientRect().top);

  switch (e.keyCode) {
    case 38: // стрелка вверх
      mouse.style.top = top - mouseHeight + "px";
      break;

    case 39: // стрелка вправо
      mouse.style.left = left + mouseHeight + "px";
      break;

    case 40: // стрелка вниз
      mouse.style.top = top + mouseHeight + "px";
      break;

    case 37: // стрелка влево
      mouse.style.left = left - mouseHeight + "px";
      break;
  }
};
