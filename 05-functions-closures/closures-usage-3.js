// Добавьте буферу из решения задачи Функция - строковый буфер
// метод buffer.clear(),
// который будет очищать текущее содержимое буфера.

function makeBuffer() {
  var buff = "";

  function buffer(data) {
    if (!arguments.length) {
      return buff;
    }
    buff += data;
  };

  buffer.clear = function() {
    buff = "";
  }

  return buffer;
}
