// Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.

let messagesContainer = document.getElementById("messages-container");
let messages = messagesContainer.children;

for (let i = 0; i < messages.length; i++) {
  messages[i].querySelector(".remove-button").onclick = function() {
    messages[i].hidden = true;
  }
}
