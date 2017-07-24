// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".

document.getElementById("hider").onclick = function() {
  document.getElementById("text").hidden = true;
  // или
  document.getElementById("text").display = "none"
};
