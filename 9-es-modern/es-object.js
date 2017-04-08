// Это не решение задачи, а примеры использования новых возможностей плюс их краткое описание.
// Записываю для себя. Полная статья: http://learn.javascript.ru/es-object

// 1. Короткие свойства
// При указании в объекте только имени свойства значение будет взято из переменной с аналогичным именем:
let name = "Вася";
let user = {name, isAdmin: true};
alert( JSON.stringify(user) ); // {"name": "Вася", "isAdmin": true}

// 2. Вычисляемые свойства
// В качестве имени свойства можно использовать выражение:
let a = "Мой ", b = "Зелёный ", c = "Крокодил";
let user = {
  [(a + b + c).toLowerCase()]: "Вася"
};
alert( user["мой зелёный крокодил"] ); // Вася

// 3. Добавлен сеттер для прототипа
Object.setPrototypeOf(obj, newProto);

// 4. Некоторые полезные функции
// Object.assign получает список объектов и копирует в первый target свойства из остальных.
let user = { name: "Вася" }, visitor = { isAdmin: false, visits: true }, admin = { isAdmin: true };
Object.assign(user, visitor, admin);
alert( JSON.stringify(user) ); // name: Вася, visits: true, isAdmin: true
// Object.is(value1, value2) возвращает true, если значения value1 и value2 равны, иначе false. Отличия от ===:
alert( Object.is(+0, -0)); // false
alert( +0 === -0 ); // true
alert( Object.is(NaN, NaN) ); // true
alert( NaN === NaN ); // false

// 5. Методы объекта
// Добавлены «методы объекта», которые, по сути, являются свойствами-функциями, привязанными к объекту. Их особенности:
// - более короткий синтаксис объявления;
// - наличие в методах специального внутреннего свойства [[HomeObject]], ссылающегося на объект, которому метод принадлежит.
// Свойство [[HomeObject]] - неизменяемое.
let name = "Вася";
let user = {
  name,
  sayHi() {
    alert(this.name);
  }
};
user.sayHi(); // Вася

// 6. Ключевое слово super
// Вызов super.parentProperty позволяет из метода объекта получить свойство его прототипа.
// Пример: если rabbit наследует от animal, то вызов super.walk() из метода объекта rabbit обращается к animal.walk().
// При обращении через super используется [[HomeObject]] текущего метода, и от него берётся __proto__.
// Поэтому super работает только внутри методов (не свойств-функций).
// В функциях-стрелках используется super внешней функции.
