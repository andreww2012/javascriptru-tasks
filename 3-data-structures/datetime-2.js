// Создайте функцию getWeekDay(date), которая выводит текущий день недели в
// коротком формате „пн“, „вт“, … „вс“.

function getWeekDay(date) {
  var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  return days[date.getDay()];
}
