// Напишите функцию, которая создаёт вложенный список UL/LI (дерево) из объекта.
// Формат объекта:
/*
var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};
*/
// Синтаксис:
/*
var container = document.getElementById('container');
createTree(container, data); // создаёт
*/
// Выберите один из двух способов решения этой задачи:
// * Создать строку, а затем присвоить через container.innerHTML.
// * Создавать узлы через методы DOM.
// Если получится – сделайте оба.
// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности –
// пустых <ul></ul> на нижнем уровне.

// Первый способ

function createTree_(container, data) {
  container.innerHTML = createTreeUl_(data);
}

function createTreeUl_(data) {
  if (Object.keys(data).length == 0) {
    return "";
  }

  let content = "<ul>";

  for (let elem in data) {
    content += "<li>" + elem + createTreeUl_(data[elem]) + "</li>";
  }

  content += "</ul>";

  return content;
}


// Второй способ

function createTree(container, data) {
  container.appendChild(createTreeUl(data));
}

function createTreeUl(data) {
  if (Object.keys(data).length == 0) {
    return;
  }

  let ul = document.createElement("ul");

  for (let elem in data) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(elem));

    let subUl = createTreeUl(data[elem]);
    if (subUl) {
      li.appendChild(subUl);
    }

    ul.appendChild(li);
  }

  return ul;
}
