// Создайте функцию truncate(str, maxlength), которая проверяет длину строки
// str, и если она превосходит maxlength – заменяет конец str на "...",
// так чтобы ее длина стала равна maxlength. Результатом функции
// должна быть (при необходимости) усечённая строка.

function truncate(str, maxLength) {
  return (str.length > maxLength) ? (str.slice(0, maxLength - 3) + "...") : str;
}
