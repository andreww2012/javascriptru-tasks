// Напишите функцию camelize(str), которая преобразует строки вида
// «my-short-string» в «myShortString».

function camelize(str) {
  var words = str.split("-");

  for (var i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join("");
}
