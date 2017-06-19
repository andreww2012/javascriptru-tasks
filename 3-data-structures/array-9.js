// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача – найти непрерывный подмассив arr, сумма элементов которого
// максимальна. Ваша функция должна возвращать только эту сумму.
// Если все элементы отрицательные, то не берём ни одного элемента и
// считаем сумму равной нулю.

// "Медленный" вариант, работает за O(n^2)
function getMaxSubSumSlow(arr) {
  var maxSum = 0, currSum = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      currSum += arr[j];
      maxSum = Math.max(maxSum, currSum);
    }
  }

  return maxSum;
}

// "Быстрый" вариант, работает за O(n)
function getMaxSubSum(arr) {
  var maxSum = 0, currSum = 0;

  for (var i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum < 0) {
      currSum = 0;
    }
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
