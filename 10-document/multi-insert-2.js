// Есть таблица: <Имя, Фамилия, Отчество, Возраст>.
// Строк в таблице много. Есть и другие элементы в документе.
// Как бы вы предложили отсортировать содержимое таблицы по полю Возраст?
// Обдумайте алгоритм, реализуйте его.
// Как сделать, чтобы сортировка работала как можно быстрее? А если в таблице
// 10000 строк (бывает и такое)?

function sortTable(table) {
  let tbody = table.tBodies[0];
  let rowsAmount = tbody.rows.length;

  table.removeChild(tbody);

  let tableData = [];

  for (let i = 0; i < rowsAmount; i++) {
    let elem = tbody.rows[i];
    tableData.push({
      element: elem,
      age: elem.cells[3].innerHTML
    });
  }

  tableData.sort((a, b) => a.age - b.age);

  for (let i = 0; i < rowsAmount; i++) {
    tbody.appendChild(tableData[i].element);
  }

  table.appendChild(tbody);
}
