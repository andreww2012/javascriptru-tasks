// Эта задача – усложнённый вариант задачи Использование функции вопросов. В ней объект user изменён.
// Теперь заменим две функции user.loginOk() и user.loginFail() на единый метод:
// user.loginDone(true/false), который нужно вызвать с true при верном ответе и fail – при неверном.
// Код ниже делает это, соответствующий фрагмент выделен.
// Сейчас он обладает важным недостатком: при записи в user другого значения объект перестанет корректно работать.
// Как бы вы написали правильно?
// Исправьте выделенный фрагмент, чтобы код заработал.
// Изменения должны касаться только выделенного фрагмента.
// Если возможно, предложите два решения, одно – с использованием bind, другое – без него. Какое решение лучше?

"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    // Переписать:
    /*
    ask("Ваш пароль?", this.password,
      function() {
        user.loginDone(true);
      },
      function() {
        user.loginDone(false);
      }
    );
    */
    // ВАРИАНТ 1
    ask("Ваш пароль?", this.password,
      function() {
        this.loginDone.bind(this, true);
      },
      function() {
        this.loginDone.bind(this, false);
      }
    );
    // ВАРИАНТ 2 (хуже: использует локальную переменную + длиннее)
    /*
    var context = this;
    ask("Ваш пароль?", this.password,
      function() {
        context.loginDone(true);
      },
      function() {
        context.loginDone(false);
      }
    );
    */
  }
};

var vasya = user;
user = null;
vasya.checkPassword();