// Напишите функцию showNotification(options), которая показывает уведомление,
// пропадающее через 1.5 сек.
// Элемент уведомления должен иметь CSS-класс notification, к которому
// добавляется класс из options.className, если есть. Исходный документ
// содержит готовые стили.
// Описание функции:

/**
 * Показывает уведомление, пропадающее через 1.5 сек
 *
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} CSS-класс
 * @param options.html {string} HTML-текст для показа
 */
function showNotification(options) {
  let notification = document.createElement("div");
  notification.style.cssText = options.cssText;
  notification.style.top = options.top + "px";
  notification.style.right = options.right + "px";
  notification.classList.add(options.className);
  notification.innerHTML = option.html;

  setTimeout(() => {
    notification.style.display = "none";
  }, 1500);
}
