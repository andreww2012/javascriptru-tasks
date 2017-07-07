// Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementById("sweeties");

menu.children[0].onclick = function() {
  menu.classList.toggle("open");
};
