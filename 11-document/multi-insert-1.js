// Напишите код для вставки текста html в конец списка ul с использованием
// метода insertAdjacentHTML. Такая вставка, в отличие от присвоения
// innerHTML+=, не будет перезаписывать текущее содержимое.
// Добавьте к списку ниже элементы <li>3</li><li>4</li><li>5</li>:
/*
<ul>
  <li>1</li>
  <li>2</li>
</ul>
*/

let lis = "<li>3</li><li>4</li><li>5</li>";
document.body.children[0].insertAdjacentHTML("beforeEnd", lis);
