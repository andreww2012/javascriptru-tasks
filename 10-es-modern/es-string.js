// Это не решение задачи, а примеры использования новых возможностей плюс их
// краткое описание. Записываю для себя.
// Полная статья: http://learn.javascript.ru/es-string

// 1. Новые кавычки `` для строк
// Базовый синтаксис:
let str = `обратные кавычки`;
// В `` разрешён перевод строки:
alert(`многострочная
строка`);
// А также в них можно вставлять выражения при помощи ${…}:
let apples = 2;
let oranges = 3;
alert(`${apples} + ${oranges} = ${apples + oranges}`); // 2 + 3 = 5

// 2. Функции шаблонизации строк
// Можно использовать свою функцию шаблонизации для строк. Название этой
// функции ставится перед первой обратной кавычкой.
// Эта функция будет автоматически вызвана в строке (*) и получит в качестве
// аргументов строку, разбитую по вхождениям параметров ${…} и сами эти
// параметры. Участки строки идут в первый аргумент-массив strings, аргументы -
// в дальнейший список аргументов values.
// В свойстве strings.raw находятся строки в точности как в оригинале (\n – это
// перевод строки, а в strings.raw – это \n)
function f(strings, ...values) {
  alert(JSON.stringify(strings));     // ["Sum of "," + "," =\n ","!"]
  alert(JSON.stringify(strings.raw)); // ["Sum of "," + "," =\\n ","!"]
  alert(JSON.stringify(values));      // [3,5,8]
}
let bananas = 3;
let pinapples = 5;
//          |  s[0] | v[0] |s[1]| v[1]  |s[2]  |      v[2]      |s[3]
str = f`Sum of ${bananas} + ${pinapples} =\n ${bananas + pinapples}!`; // (*)

// 3. Улучшенная поддержка юникода
// Суррогатная пара - явление, когда одному символу языка соответствует два \
// юникодных символа (4 байта вместо 2 байт).
// Добавлены методы String.fromCodePoint и str.codePointAt – аналоги
// String.fromCharCode и str.charCodeAt, корректно работающие с суррогатными
// парами.
alert( '𝒳'.charCodeAt(0) + ' ' + '𝒳'.charCodeAt(1) ); // 55349 56499
alert( '𝒳'.codePointAt(0) ); // 119987 (корректно)
// 풳, неверно (берёт первые два байта от числа)
alert( String.fromCharCode(119987) );
alert( String.fromCodePoint(119987) ); // 𝒳, правильно

// 4. Синтаксис \u{длинный код}
// Чтобы вводить более длинные коды символов, добавили запись \u{NNNNNNNN}, где
// NNNNNNNN – максимально восьмизначный код.
alert( "\u{20331}" ); // 𠌱, китайский иероглиф с этим кодом

// 5. Unicode-нормализация
// Некоторые символы получаются с добавлением одного или неск. диакритических
// знаков. Пример: S с точками сверху и снизу. Проблема в том, что такой символ
// можно представить по-разному, отсюда - неравенство строк:
alert("S\u0307\u0323"); // Ṩ
alert("S\u0323\u0307"); // Ṩ (изменён порядок добавления точек)
alert( "S\u0307\u0323" == "S\u0323\u0307" ); // false
// С целью разрешить эту ситуацию, существует юникодная нормализация, при
// которой строки приводятся к единому, «нормальному», виду. В современном
// JavaScript это делает метод str.normalize().
alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true

// 6. Другие полезные методы
// str.includes(s) – проверяет, включает ли одна строка в себя другую,
// возвращает true/false. str.endsWith(s) – возвращает true, если строка str
// заканчивается подстрокой s. str.startsWith(s) – возвращает true, если строка
// str начинается со строки s. str.repeat(times) – повторяет строку str times
// раз.