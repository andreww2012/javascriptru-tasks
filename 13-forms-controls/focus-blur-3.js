// Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.
// Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием
// клавиш Ctrl+S, при этом <div> получит в виде HTML содержимое <textarea>.
// Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не
// сохраняются.

let view = document.getElementById("view");
let textarea = document.getElementById("area");

document.addEventListener("keydown", (e) => {
  // Ctrl+E
  if ((e.ctrlKey || e.metaKey) && e.keyCode == 69 && view.offsetHeight) {
    view.style.display = "none";
    textarea.value = view.innerHTML;
    textarea.style.display = "block";
    textarea.focus();
    e.preventDefault();
  }

  // Ctrl+S
  if ((e.ctrlKey || e.metaKey) && e.keyCode == 83 && !view.offsetHeight) {
    textarea.style.display = "none";
    view.innerHTML = textarea.value;
    view.style.display = "block";
    e.preventDefault();
  }

  // Escape
  if (e.keyCode == 27) {
    textarea.style.display = "none";
    view.style.display = "block";
    e.preventDefault();
  }
});
