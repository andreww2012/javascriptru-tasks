// Напишите функцию, которая умеет генерировать календарь для заданной пары
// (месяц, год).
// Календарь должен быть таблицей, где каждый день – это TD. У таблицы должен
// быть заголовок с названиями дней недели, каждый день – TH.
// Синтаксис:
// createCalendar(id, year, month).
// Такой вызов должен генерировать текст для календаря месяца month в году year,
// а затем помещать его внутрь элемента с указанным id.
// P.S. Достаточно сгенерировать календарь, кликабельным его делать не нужно.

function createCalendar(id, year, month) {
  let calendar = "<table><tbody><tr><th>пн</th><th>вт</th><th>ср</th>" +
  "<th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>" + "<tr>";

  month -= 1;
  let date = new Date(year, month);

  let firstDayOfMonth = date.getDay();
  if (firstDayOfMonth == 0) {
    firstDayOfMonth = 7;
  }

  // Особая обработка первой недели
  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar += "<td></td>";
  }

  // Последующие недели
  while (date.getMonth() == month) {
    calendar += "<td>" + date.getDate() + "</td>";

    if (date.getDay() == 0) {
      calendar += "<tr></tr>"
    }

    date.setDate(date.getDate() + 1);
  }

  calendar += "</tbody></table>";
  id.innerHTML = calendar;
}
