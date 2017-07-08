// Сделайте так, чтобы при клике на ссылки внутри элемента #contents
// пользователю выводился вопрос о том, действительно ли он хочет покинуть
// страницу и если он не хочет, то прерывать переход по ссылке.
// Детали:
// * Содержимое #contents может быть загружено динамически и присвоено при
// помощи innerHTML. Так что найти все ссылки и поставить на них обработчики
// нельзя. Используйте делегирование.
// * Содержимое может содержать вложенные теги, в том числе внутри ссылок,
// например, <a href=".."><i>...</i></a>.

let contents = document.getElementById("contents");

contents.onclick = function(e) {
  let target = e.target;

  while (target != this) {
    if (target.nodeName == "A") {
      let go = confirm("Посетить " + target.getAttribute("href"));
      if (!go) {
        return false;
      }
    }
    target = target.parentNode;
  }
};
