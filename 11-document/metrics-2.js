// Напишите код, который возвращает ширину стандартной полосы прокрутки. Именно
// самой полосы, где ползунок. Обычно она равна 16px, в редких и мобильных
// браузерах может колебаться от 14px до 18px, а кое-где даже равна 0px.
// P.S. Ваш код должен работать на любом HTML-документе, независимо от его
// содержимого.

let elem = document.createElement("div");

elem.style.overflowY = "scroll";
elem.style.width = "1px";
elem.style.height = "1px";
elem.style.visibility = "hidden";

document.body.appendChild(elem);
console.log(elem.offsetWidth - elem.clientWidth);
document.body.removeChild(elem);
