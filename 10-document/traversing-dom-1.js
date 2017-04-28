// Для страницы:

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div>Пользователи:</div>
  <ul>
    <li>Маша</li>
    <li>Вовочка</li>
  </ul>

  <!-- комментарий -->

  <script>
    // ... ваш код
  </script>

</body>

</html>
*/

// Напишите код, который получит элемент HEAD.

console.log(document.documentElement.firstElementChild);
console.log(document.documentElement.children[0]);
// Также возможно, т. к. пробелы перед head игнорируются:
console.log(document.documentElement.firstChild);
console.log(document.documentElement.childNodes[0]);

// Напишите код, который получит UL.

console.log(document.body.children[1]);

// Напишите код, который получит второй LI.

console.log(document.body.children[1].children[1]);
