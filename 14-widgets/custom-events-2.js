// Добавьте в решение задачи Компонент: список с выделением
// (widgets-structure-3.js) событие select.
// Оно должно срабатывать при каждом изменении выбора и в свойстве detail
// содержать список выбранных строк.
// Во внешнем коде добавьте обработчик к списку, который при изменениях выводит
// список значений.

function ListSelect(options) {
  let list = options.elem;

  let listItems = list.children;
  let lastClickedElem = null;

  function getSelected() {
    return [].map.call(list.querySelectorAll(".selected"), (item) => {
      return item.innerHTML;
    });
  }

  function selectItem(item) {
    item.classList.add("selected");
  }

  function deselectItem(item) {
    item.classList.remove("selected");
  }

  function toggleItem(item) {
    item.classList.toggle("selected");
  }

  function deselectAll() {
    [].forEach.call(listItems, deselectItem);
  }

  function dispatchEvent() {
    list.dispatchEvent(new CustomEvent("select", {
      bubbles: true,
      detail: getSelected()
    }));
  }

  list.onclick = e => {
    let target = e.target;

    if (target.tagName != "LI" || e.which != 1) {
      return;
    }

    if (e.shiftKey && lastClickedElem) {
      let lastItem;

      // target предшествует lastClickedElem?
      if (target.compareDocumentPosition(lastClickedElem) & 4) {
        for (let i = target; i != lastClickedElem; i = i.nextElementSibling) {
          selectItem(i);
          lastItem = i;
        }
      } else {
        for (let i = target; i != lastClickedElem; i = i.previousElementSibling) {
          selectItem(i);
          lastItem = i;
        }
      }

      selectItem(lastItem);
    } else if (e.ctrlKey || e.metaKey) {
      toggleItem(target);
    } else {
      deselectAll();
      selectItem(target);
    }

    lastClickedElem = target.classList.contains("selected") ? target : null;
    dispatchEvent();
  };

  list.onmousedown = () => false;

  this.getSelected = getSelected;
}
