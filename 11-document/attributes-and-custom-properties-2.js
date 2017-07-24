// Сделайте желтыми внешние ссылки, добавив им класс external.
// Все ссылки без href, без протокола и начинающиеся с http://internal.com
// считаются внутренними.
// Документ: attributes-and-custom-properties-2.html

let links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  href = links[i].getAttribute("href");

  if (!href
    || href.indexOf("://") == -1
    || href.indexOf("http://internal.com") == 0) {
    continue;
  }

  links[i].classList.add("external");
}
