// Есть длинный список ul. Как наиболее эффективно получить второй LI?

// НАЧАЛО РЕШЕНИЯ. Два варианта:
ul = document.getElementsByTagName("ul");

// Два варианта:
console.log(ul.getElementsByTagName("li")[1]);
console.log(document.querySelector("li:nth-child(2)"));
// P. S. По моему мнению, второй вариант будет работать чуть медленнее из-за
// использования более сложного CSS-селектора + см. результаты теста
// (searching-elements-internals-2.js).
