// Напишите интерфейс, который принимает математическое выражение (prompt) и возвращает его результат.
// Проверять выражение на корректность не требуется.

var exp = prompt("Введите выражение:", "");
alert( +eval(exp) );