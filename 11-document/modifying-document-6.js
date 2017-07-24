// Есть дерево, организованное в виде вложенных списков <ul>/<li>.
// Напишите код, который добавит каждому элементу списка <li> количество
// вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

function printUlChildrenAmount(ul) {
  let lis = ul.getElementsByTagName("li");

  for (let i = 0; i < lis.length; i++) {
    var amount = lis[i].getElementsByTagName("li").length;

    if (amount > 0) {
      lis[i].firstChild.data += " [" + amount + "]";
    }
  }
}
