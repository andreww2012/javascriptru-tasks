// Напишите код, который выделит все ячейки в таблице по диагонали.
// Вам нужно будет получить из таблицы table все диагональные td и выделить их,
// используя код:
// td.style.backgroundColor = 'red';

for (var i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
