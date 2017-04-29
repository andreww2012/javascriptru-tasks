
// На данной странице (searching-elements-dom-1.html) странице найдите:
// 1. Все элементы label внутри таблицы. Должно быть 3 элемента.

try {
  console.log(document.getElementById("age-table").getElementsByTagName("label"));
  console.log(document.querySelectorAll("#age-table label"));

  // 2. Первую ячейку таблицы (со словом "Возраст").
  console.log(document.getElementById("age-table").rows[0].cells[0]);
  console.log(document.getElementById("age-table").getElementsByTagName("td")[0]);
  console.log(document.querySelector("#age-table td"));

  // 3. Вторую форму в документе.
  console.log(document.getElementsByTagName("form")[1]);

  // 4. Форму с именем search, без использования её позиции в документе.
  console.log(document.querySelector("form[name='search']"));

  // 5. Элемент input в форме с именем search. Если их несколько, то нужен первый.
  console.log(document.querySelector("form[name='search'] input"));

  // 6. Элемент с именем info[0], без точного знания его позиции в документе.
  console.log(document.getElementsByName("info[0]")[0]);

  // 7. Элемент с именем info[0], внутри формы с именем search-person.
  console.log(document.querySelector("form[name='search-person'] [name='info[0]']"));
} catch (e) {
  console.info("Запускайте этот скрипт только из файла searching-elements-dom-1.html");
}
