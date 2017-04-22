// Это не решение задачи, а примеры использования новых возможностей плюс их краткое описание.
// Записываю для себя. Полная статья: http://learn.javascript.ru/set-map

// 1. Map
// Map – коллекция для хранения записей вида ключ:значение.
// В отличие от объектов, в Map ключом может быть произвольное значение. Создание Map:
let map = new Map();

// 2. Основные методы и свойства Map
map.set('1', 'str1'); // ключ-строка
map.set(1, 'num1'); // число и т. д.
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'
// Метод set можно чейнить:
map.set('1', 'str1').set(1, 'num1');
// В качестве ключей map можно использовать и объекты:
let user = { name: "Вася" };
let visitsCountMap = new Map();
visitsCountMap.set(user, 123);
alert(visitsCountMap.get(user)); // 123
// Получение количества значений:
alert(map.size); // 2
// Остальные методы:
// map.delete(key) удаляет запись с ключом key, возвращает true, если такая запись была,
// иначе false.
// map.clear() удаляет все записи, очищает map.
// map.has(key) возвращает true, если ключ есть, иначе false.

// 3. Создание Map сразу со списком значений
// При создании Map можно сразу инициализировать списком значений.
// При этом аргументом new Map должен быть итерируемый объект (не обязательно именно массив).
let map = new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']]);

// 4. Как Map сравнивает ключи:
// Map использует алгоритм SameValueZero, который работает как ===, лишь с той разницей,
// что NaN равен NaN.

// 5. Итерация по Map:
// map.keys() – возвращает итерируемый объект для ключей,
// map.values() – возвращает итерируемый объект для значений,
// map.entries() – возвращает итерируемый объект для записей [ключ, значение], он использует
// по умолчанию в for..of. Перебор идёт в том же порядке, что и вставка.
let recipeMap = new Map([['огурцов', '500 гр'], ['помидоров', '350 гр'], ['сметаны',  '50 гр']]);
for (let fruit of recipeMap.keys()) { alert(fruit); } // огурцов, помидоров, сметаны
for (let entry of recipeMap) { alert(entry); } // огурцов,500 гр , и т.д., массивы по 2 значения
// У Map также есть стандартный метод forEach, аналогичный массиву:
// огурцов: 500 гр, и т. д.
recipeMap.forEach( (value, key, map) => { alert(`${key}: ${value}`); } )
