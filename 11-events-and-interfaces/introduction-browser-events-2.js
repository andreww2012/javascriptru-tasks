// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// P. S. Альтернативное решение приведено на странице с кнопкой.

let button = document.getElementById("hider");

button.onclick = function() {
  button.hidden = true;
  // или
  button.style.display = "none";
};
