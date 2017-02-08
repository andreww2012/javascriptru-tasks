// Напишите конструктор User для создания объектов:
// С приватными свойствами имя firstName и фамилия surname.
// С сеттерами для этих свойств.
// С геттером getFullName(), который возвращает полное имя.

function User() {
  var firstName, surname;

  this.setFirstName = function(arg) {
    firstName = arg;
  };

  this.setSurname = function(arg) {
    surname = arg;
  };

  this.getFullName = function() {
    return firstName + " " + surname;
  };
}