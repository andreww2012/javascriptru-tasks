// Предложенный код меню, само задание в template-lodash-2.html

function Menu(options) {
  let elem;

  function getElem() {
    if (!elem) {
      render();
    }

    return elem;
  }

  function render() {
    let html = options.template({
      title: options.title
    });

    elem = document.createElement("div");
    elem.innerHTML = html;
    elem = elem.firstElementChild;

    elem.onmousedown = () => false;

    elem.onclick = (e) => {
      if (e.target.closest(".title")) {
        toggle();
      }

      // Также новая функциональность скопирована из решения
      if (e.target.closest("a")) {
        e.preventDefault();
        select(e.target.closest("a"));
      }
    }
  }

  function renderItems() {
    if (elem.querySelector("ul")) {
      return;
    }

    let listHtml = options.listTemplate({
      items: options.items
    });
    elem.insertAdjacentHTML("beforeEnd", listHtml);
  }

  // P. S. Новая функция select также скопирована их решения
  function select(link) {
    alert(link.getAttribute('href').slice(1));
  }

  function open() {
    renderItems();
    elem.classList.add("open");
  };

  function close() {
    elem.classList.remove("open");
  };

  function toggle() {
    if (elem.classList.contains("open")) {
      close();
    } else {
      open();
    }
  };

  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;
}
