// Создайте галерею изображений, в которой основное изображение изменяется при
// клике на уменьшенный вариант.
// Для обработки событий используйте делегирование, т.е. не более одного
// обработчика.
// P.S. Обратите внимание – клик может быть как на маленьком изображении IMG,
// так и на A вне него. При этом event.target будет, соответственно, либо IMG,
// либо A.
// Дополнительно:
// * Если получится – сделайте предзагрузку больших изображений, чтобы при
// клике они появлялись сразу.

let largeImage = document.getElementById("largeImg");
let thumbs = document.getElementById("thumbs");

// Оптимизация
let images = thumbs.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  let div = document.createElement("div");
  div.setAttribute("src", images[i].parentNode.getAttribute("href"));
}

thumbs.onclick = function(e) {
  let target = e.target;

  while (target != this) {
    if (target.tagName == "A") {
      largeImage.setAttribute("src", target.getAttribute("href"));
      largeImage.setAttribute("alt", target.getAttribute("title"));
      return false;
    }
    target = target.parentNode;
  }
}
