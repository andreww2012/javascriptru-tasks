// Создайте цветные часики с использованием "setInterval"

let clock = document.getElementById("clock");

function clockUpdate() {
  let date = new Date();

  clock.children[0].innerHTML = date.getHours();
  clock.children[1].innerHTML = date.getMinutes();
  clock.children[2].innerHTML = date.getSeconds();
}

setInterval(clockUpdate, 1000);
clockUpdate();
