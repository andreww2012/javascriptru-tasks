// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или
// нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

var numbers = [], userNumber, userNumberSum = 0;

while(true) {
  userNumber = prompt("Введите очередное число:", "");

  if (userNumber == null || userNumber.length == 0 || isNaN(userNumber)) {
    break;
  }

  numbers.push(+userNumber);
  userNumberSum += numbers[numbers.length - 1];
}

alert(userNumberSum);
