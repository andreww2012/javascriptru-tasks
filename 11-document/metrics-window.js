// Обычно в IE8 не поддерживается свойство pageYOffset. Напишите полифилл для
// него.

if (window.pageYOffset === undefined) {
  Object.defineProperty(window, "pageYOffset", {
    get: function() {
      return document.documentElement.scrollTop;
    }
  });
}
