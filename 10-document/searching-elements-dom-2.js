// Есть дерево из тегов <ul>/<li>. Напишите код, который для каждого элемента <li> выведет:
// Текст непосредственно в нём (без подразделов).
// Количество вложенных в него элементов <li> – всех, с учётом вложенных.

var tree = document.getElementsByTagName("li");

if (!tree.length) {
  console.warn("Запускайте этот скрипт со страницы, где есть дерево из тегов <ul>/<li> ДО вызова скрипта");
}

for (var i = 0; i < tree.length; i++) {
  var li = tree[i];
  console.log("Li text: " + li.firstChild.data.trim());
  console.log("Nested lis: " + li.getElementsByTagName("li").length);
}
