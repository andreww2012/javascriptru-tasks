// Код сервера для задачи, взят с сайта.

const http = require("http");
const url = require("url");
const querystring = require("querystring");
const static = require("node-static");
const file = new static.Server(".", {
  cache: 0
});

function accept(req, res) {
  if (req.url == "/phones.json") {
    // искусственная задержка для наглядности
    setTimeout(function() {
      file.serve(req, res);
    }, 2000);
  } else {
    file.serve(req, res);
  }
}

if (!module.parent) {
  http.createServer(accept).listen(8080);
  console.log("Server running on port 8080");
} else {
  exports.accept = accept;
}
