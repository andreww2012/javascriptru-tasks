// Создайте для <input type="password"> красивый, стилизованный плейсхолдер,
// например (кликните на тексте):
// При клике плейсхолдер просто исчезает и дальше не показывается.

let input = document.getElementById("input");
let placeholder = document.getElementById("placeholder");

input.onfocus = () => {
  placeholder.style.display = "none";
}

placeholder.onclick = () => {
  input.focus();
}
