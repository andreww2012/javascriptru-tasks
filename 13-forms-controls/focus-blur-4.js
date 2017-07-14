// Сделать ячейки таблицы td редактируемыми по клику.
// * При клике – ячейка <td> превращается в редактируемую, можно менять HTML.
// Размеры ячеек при этом не должны меняться.
// * В один момент может редактироваться одна ячейка.
// * При редактировании под ячейкой появляются кнопки для приема и отмена
// редактирования, только клик на них заканчивает редактирование.

let table = document.getElementById("bagua-table");
let editingTd = null;

table.onclick = e => {
  let target = e.target;

  if (target.classList.contains("edit-ok")) {
    editingTd.elem.innerHTML = editingTd.elem.firstChild.value;
    editingTd.elem.classList.remove("edit-td");
    editingTd = null;
    return;
  }

  if (target.classList.contains("edit-cancel")) {
    editingTd.elem.innerHTML = editingTd.data;
    editingTd.elem.classList.remove("edit-td");
    editingTd = null;
    return;
  }

  if (target.nodeName != "TD" || editingTd) {
    return;
  }

  editingTd = {
    elem: target,
    data: target.innerHTML
  }
  target.classList.add("edit-td");

  let textarea = document.createElement("textarea");
  textarea.style.width = target.offsetWidth + "px";
  textarea.style.height = target.offsetHeight + "px";
  textarea.className = "edit-area";
  textarea.value = target.innerHTML;
  target.innerHTML = "";
  target.appendChild(textarea);
  textarea.focus();

  target.insertAdjacentHTML(
    "beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
};
