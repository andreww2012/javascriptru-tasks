// Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения.

function randomInteger(min, max) {
  return min + Math.floor( Math.random() * (max - min + 1) );
}