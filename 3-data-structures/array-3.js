// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».

var styles = ["Джаз", "Блюз"];

styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");