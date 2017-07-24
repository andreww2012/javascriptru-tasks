// В ифрейме ниже вы видите документ с зеленым «полем»: https://vk.cc/6QZ0yj
// При помощи JavaScript найдите координаты указанных стрелками углов
// относительно окна браузера.
// Ваш код должен при помощи DOM получить четыре пары координат:
// (1) Левый верхний угол снаружи.
// (2) Правый нижний угол снаружи.
// (3) Левый верхний угол внутри.
// (4) Правый нижний угол внутри, можно сделать даже несколькими способами.
// Они должны совпадать с координатами, которые вы получите кликом по полю.
// P.S. Код не должен быть как-то привязан к конкретным размерам элемента,
// стилям, наличию или отсутствию рамки.

let field = document.getElementById("field");
let fieldCoords = field.getBoundingClientRect();
let fieldStyle = window.getComputedStyle(field, "");

let leftTopOutside, rightBottomOutside, leftTopInside, rightBottomInside;

// (1)
console.log([fieldCoords.left, fieldCoords.top]);

// (2)
console.log([fieldCoords.right, fieldCoords.bottom]);

// (3)
console.log([
  fieldCoords.left + field.clientLeft,
  fieldCoords.top + field.clientTop
]);

// (4)
console.log([
  fieldCoords.right - parseInt(fieldStyle.borderRightWidth),
  fieldCoords.bottom - parseInt(fieldStyle.borderBottomWidth)
]);
