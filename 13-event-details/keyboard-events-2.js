// Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая
// запускает func при одновременном нажатии клавиш со скан-кодами code1,
// code2, ..., code_n.
// Например, код ниже выведет alert при одновременном нажатии клавиш "Q" и "W"
// (в любом регистре, в любой раскладке)
/*
runOnKeys(
  function() { alert("Привет!") },
  "Q".charCodeAt(0),
  "W".charCodeAt(0)
);
*/

function runOnKeys(func, ...codes) {
  let shortcut = {};

  document.addEventListener("keydown", (e) => {
    shortcut[e.keyCode] = true;

    for (let key of codes) {
      if (!shortcut[key]) {
        return;
      }
    }

    shortcut = {};

    func();
  });

  document.addEventListener("keyup", (e) => {
    shortcut[e.keyCode] = false;
  });
}
