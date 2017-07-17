
// Перепишите решение задачи Список с выделением (mouse-clicks-1.js) в виде
// компонента.
// У компонента должен быть единственный публичный метод getSelected(), который
// возвращает выбранные значения в виде массива.

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

  list.onclick = e => {
    let target = e.target;

    if (target.tagName != "LI" || e.which != 1) {
      return;
    }

    if (e.shiftKey && lastClickedElem) {
      // target предшествует lastClickedElem?
      if (target.compareDocumentPosition(lastClickedElem) & 4) {
        for (let i = target; i != lastClickedElem; i = i.nextElementSibling) {
          selectItem(i);
        }
      } else {
        for (let i = target; i != lastClickedElem; i = i.previousElementSibling) {
          selectItem(i);
        }
      }

      selectItem(i);
    } else if (e.ctrlKey || e.metaKey) {
      toggleItem(target);
    } else {
      deselectAll();
      selectItem(target);
    }

    lastClickedElem = target.classList.contains("selected") ? target : null;
  };

  list.onmousedown = () => false;

  this.getSelected = getSelected;
}
