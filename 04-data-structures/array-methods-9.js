// Односвязный список – это структура данных, которая состоит из элементов,
// каждый из которых хранит ссылку на следующий.
// Последний элемент может не иметь ссылки, либо она равна null.
// Напишите функцию printList(list), которая выводит элементы списка по очереди,
// при помощи цикла.
// Напишите функцию printList(list) при помощи рекурсии.
// Напишите функцию printReverseList(list), которая выводит элементы списка в
// обратном порядке, при помощи рекурсии.
// Для списка выше она должна выводить 4,3,2,1.
// Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
// Список:

/*
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
*/

// НАЧАЛО РЕШЕНИЯ
// _ в конце имени функции - реализация с рекурсией

function printList(list) {
  var currList = list;

  while(currList.next) {
    console.log(currList.value);
    currList = currList.next;
  }
}

function printList_(list) {
  console.log(list.value);

  if (list.next) {
    printList_(list.next);
  }
}

function printReverseList_(list) {
  if (list.next) {
    printReverseList_(list);
  }

  console.log(list.value);
}

function printReverseList(list) {
  var values = [];
  var currList = list;

  while(currList.next) {
    values.push(currList.value);
    currList = currList.next;
  }

  for (var i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
  }
}
