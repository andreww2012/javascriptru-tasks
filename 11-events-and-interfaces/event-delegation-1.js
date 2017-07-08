// Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
// Используйте делегирование событий. Один обработчик для всего.
// В результате, должно работать вот так: https://vk.cc/6Re7U6

let messages = document.getElementById("messages-container");

messages.onclick = function(e) {
  let target = e.target;

  if (target.classList.contains("remove-button")) {
    target.parentNode.hidden = true;
  }
};
