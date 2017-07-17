// Пример создания статического сервера

const http = require("http"); // Модуль для создания HTTP-сервера
const static = require("node-static"); // Модуль, реализующий статический сервер
const file = new static.Server(".");

// req - объект запроса (то, что прислал клиент), res - ответ, его нек. методы:
// res.writeHead(HTTP-код, [строка статуса], {заголовки}) пишет заголовки.
// res.write(txt) пишет текст в ответ.
// res.end(txt)   завершает запрос ответом.
http.createServer((req, res) => {
  file.serve(req, res);
}).listen(8080);

console.log("Server running on port 8080");
