// Обычно, до того как изображение загрузится (или при отключенных картинках),
// посетитель видит пустое место с текстом из «ALT». Но этот атрибут не
// допускает HTML-форматирования.
// При мобильном доступе скорость небольшая, и хочется, чтобы посетитель сразу
// видел красивый текст.
// Реализуйте «красивый» (HTML) аналог alt при помощи CSS/JavaScript, который
// затем будет заменён картинкой сразу же как только она загрузится. А если
// загрузка не состоится – то не заменён.

let images = document.getElementsByClassName("img-replace");

for (let i = 0; i < images.length; i++) {
  let image = document.createElement("img");
  image.src = images[i].dataset.src;
  image.className = "img-replace";

  image.onload = () => {
    images[i].parentNode.replaceChild(image, images[i]);
  };
}
