// Напишите свой, самостоятельно оформленный, селект.
// Требования:
// * Открытие и закрытие по клику на заголовок.
// * Закрытие селекта происходит при выборе или клике на любое другое место
// документа, в том числе на другой аналогичный селект.
// * Событие "select" при выборе опции возникает на элементе селекта и
// всплывает.
// * Значение опции хранится в атрибуте data-value (HTML-структура есть в
// исходном документе).

function CustomSelect(options) {
  let elem = options.elem;
  let title = elem.querySelector(".title");
  let list = elem.querySelector("ul");

  function toggleSelect() {
    elem.classList.toggle("open");
  }

  function closeSelect() {
    elem.classList.remove("open");
  }

  function onDocumentClick(e) {
    let target = e.target;

    if (target == title) {
      toggleSelect();
    } else if (!list.contains(target)) {
      closeSelect();
    }
  }

  list.onclick = (e) => {
    e.target.dispatchEvent(new CustomEvent("select", {
      bubbles: true,
      detail: e.target.dataset
    }));

    title.innerHTML = e.target.innerHTML;
    closeSelect();
  };

  document.addEventListener("click", onDocumentClick);
}
