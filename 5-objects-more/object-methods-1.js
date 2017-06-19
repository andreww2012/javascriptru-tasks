// Создайте объект calculator с тремя методами:
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений

var calculator = {
  val1: "",
  val2: "",

  read: function() {
    this.val1 = +prompt("Первое число:", 2);
    this.val2 = +prompt("Второе число:", 2);
  },

  sum: function() {
    return this.val1 + this.val2;
  },

  mul: function() {
    return this.val1 * this.val2;
  }
};
