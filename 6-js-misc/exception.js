// Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.
// При ошибке нужно выводить сообщение и просить переввести выражение.
// Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, например 0/0.

while (true) {
  var exp = prompt("Введите выражение:", "");
  if (exp == null) break;

  try {
    result = +eval(exp);

    if (isNaN(result)) {
      throw new Error("Введите выражение ещё раз, оно некорретно.");
    }

    break;
  } catch (e) {
    alert("Ошибка: " + e.message);
  }
}
