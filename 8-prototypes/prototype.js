// Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

// НАЧАЛО РЕШЕНИЯ
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;