// Вызов user.checkPassword() в коде ниже должен при помощи ask должен
// спрашивать пароль и вызывать loginOk/loginFail в зависимости
// от правильности ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало
// (других строк изменять не надо).
// P.S. Ваше решение должно также срабатывать, если переменная user будет
// перезаписана, например вместо user.checkPassword() в конце будут строки:

/*
var vasya = user;
user = null;
vasya.checkPassword();
*/

"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    alert( this.login + ' вошёл в сайт' );
  },

  loginFail: function() {
    alert( this.login + ': ошибка входа' );
  },

  checkPassword: function() {
    // Изменить:
    // ask("Ваш пароль?", this.password, this.loginOk, this.loginFail);
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

user.checkPassword();
