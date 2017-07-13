// Создайте функцию addScript(src, callback), которая загружает скрипт с данным
// src, и после его загрузки и выполнения вызывает функцию callback.
// Скрипт может быть любым, работа функции не должна зависеть от его
// содержимого.
// Пример использования:
/*
// go.js содержит функцию go()
addScript("go.js", function() {
  go();
});
*/
// Ошибки загрузки обрабатывать не нужно.

function addScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  let firstScriptElement = document.getElementsByTagName('script')[0];
  firstScriptElement.parentNode.insertBefore(script, firstScriptElement);

  script.onload = script.onerror = () => {
    callback();
  };
}
