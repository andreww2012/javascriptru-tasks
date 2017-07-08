// Сделать сортировку таблицы при клике на заголовок. Демо: https://vk.cc/6Rfmiu
// Требования:
// * Использовать делегирование.
// * Код не должен меняться при увеличении количества столбцов или строк.
// P.S. Обратите внимание, тип столбца задан атрибутом у заголовка. Это
// необходимо, ведь числа сортируются иначе чем строки. Соответственно, код это
// может использовать.
// P.P.S. Вам помогут дополнительные навигационные ссылки по таблицам.

let table = document.getElementById("grid");
let tbody = table.tBodies[0];
let rowsAmount = tbody.rows.length;

table.tHead.onclick = function(e) {
  let target = e.target;

  if (target.tagName == "TH") {
    table.removeChild(tbody);

    let tableData = [];

    for (let i = 0; i < rowsAmount; i++) {
      tableData.push(tbody.rows[i]);
    }

    let colNum = target.cellIndex;
    let sortFunction;

    switch (target.dataset.type) {
      case "number":
        sortFunction = function(a, b) {
          return a.cells[colNum].innerHTML - b.cells[colNum].innerHTML;
        };
        break;

      case "string":
        sortFunction = function(a, b) {
          return a.cells[colNum].innerHTML > b.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
    }

    tableData.sort(sortFunction);

    for (let i = 0; i < rowsAmount; i++) {
      tbody.appendChild(tableData[i]);
    }

    table.appendChild(tbody);
  } // if th
};
