// Превратите объект team из примера ниже в JSON:

var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

// НАЧАЛО РЕШЕНИЯ
// Сделать прямой вызов JSON.stringify(team) нельзя, поскольку объекты
// ссылаются друг на друга, получится бесконечная JSON-строка
teamJSON = JSON.stringify(team, ["name"]);
