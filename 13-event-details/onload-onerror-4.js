// Создайте функцию addScripts(scripts, callback), которая загружает скрипты из
// массива scripts, и после загрузки и выполнения их всех вызывает функцию
// callback.
// Скрипт может быть любым, работа функции не должна зависеть от его
// содержимого.
// Пример использования:
/*
addScripts(["a.js", "b.js", "c.js"], function() { a() });
// функция a() описана в a.js и использует b.js,c.js
*/
// * Ошибки загрузки обрабатывать не нужно.
// * Один скрипт не ждёт другого. Они все загружаются, а по окончании
// вызывается обработчик callback.
// Исходный код содержит скрипты a.js, b.js, c.js:

function addScripts(scripts, callback) {
  const scriptsCount = scripts.length;
  let loaded = 0;
  let firstScriptElement = document.getElementsByTagName('script')[0];

  scripts.forEach((x) => {
    let script = document.createElement("script");
    script.src = x;
    firstScriptElement.parentNode.insertBefore(script, firstScriptElement);

    script.onload = script.onerror = () => {
      loaded++;
      if (loaded == scriptsCount) {
        callback();
      }
    };
  });
}