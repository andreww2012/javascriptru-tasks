// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом

function ucFirst(str) {
  return (str.length > 0) ? (str[0].toUpperCase() + str.slice(1)) : str;
}