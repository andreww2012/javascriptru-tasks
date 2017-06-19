// Это не решение задачи, а примеры использования новых возможностей плюс их
// краткое описание. Записываю для себя.
// Полная статья: http://learn.javascript.ru/generator

// 1. Понятие Proxy
// Прокси (proxy) – особый объект, смысл которого – перехватывать обращения к
// другому объекту и, при необходимости, модифицировать их. Синтаксис:
let proxy = new Proxy(target, handler);
// * target – объект, обращения к которому надо перехватывать.
// * handler – объект с «ловушками»: ф-ями-перехватчиками для операций к target.
// Почти любая операция может быть перехвачена и обработана прокси до или даже
// вместо доступа к объекту target, напр.: чтение, запись, получение списка
// свойств, вызов функции (если target ф-я) и т.п.
// Если для операции нет ловушки, то она выполняется напрямую над target.

// 2. Действия для перехвата
// 2.1. get/set
// get(target, property, receiver) срабатывает при чтении свойства из прокси.
// Аргументы:
// * target – целевой объект, тот же, который был передан первым аргументом в
// new Proxy.
// * property – имя свойства.
// * receiver – объект, к которому было применено присваивание. Обычно либо сам
// прокси, либо прототипно наследующий от него. Этот арг-т используется редко.
// set(target, property, value, receiver) срабатывает при записи свойства в
// прокси. Аргументы:
// * value – значение свойства.
// * остальные те же.
// Метод set должен вернуть true, если присвоение успешно обработано и false в
// случае ошибки (приведёт к генерации TypeError).
// Пример:
let user = {};
let proxy_ = new Proxy(user, {
  get(target, prop) {
    alert(`Чтение ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    alert(`Запись ${prop} ${value}`);
    target[prop] = value;
    return true;
  }
});
proxy_.firstName = "Ilya"; // запись
proxy_.firstName; // чтение
alert(user.firstName); // Ilya
// Есть много применений Proxy, например, методы get/set позволяют реализовать
// доступ к произвольным свойствам, которых в объекте нет. Пример см. в статье
// про прокси на сайте.

// 2.2. has
// has срабатывает в операторе in и некоторых других случаях, когда проверяется
// наличие свойства. Синтаксис has аналогичен get. При отс. ловушки операция
// произв. напрямую над исходным объектом.

// 2.3. deleteProperty
// Ловушка deleteProperty по синтаксису аналогична get/has.
// Срабатывает при операции delete, должна вернуть true, если удаление было
// успешным.
let dictionary = { 'Hello': 'Привет' };
let proxy2 = new Proxy(dictionary, {
  deleteProperty(target, phrase) {
    return true; // ничего не делаем, но возвращает true
  }
});
delete proxy2['Hello']; // не удалит свойство

// 2.4. enumerate
// Ловушка enumerate перехватывает операции for..in и for..of по объекту.
// Как и до ранее, если ловушки нет, то эти операторы работают с исходным
// объектом:
let obj = {a: 1, b: 1};
let proxy2_ = new Proxy(obj, {});
for (let prop in proxy2_) {
  alert(prop); // Выведет свойства obj: a, b
}
// Если же ловушка enumerate есть, то она будет вызвана с единственным
// аргументом target и сможет вернуть итератор для свойств.

// 2.5 apply
// Прокси умеет работать не только с обычными объектами, но и с функциями.
// Если аргумент target прокси – функция, то становится доступна ловушка apply
// для её вызова. Метод apply(target, thisArgument, argumentsList) получает:
// * target – исходный объект.
// * thisArgument – контекст this вызова.
// * argumentsList – аргументы вызова в виде массива.
// Она может обработать вызов сама и/или передать его функции. Пример:
function sum(a, b) { return a + b; }
let proxy3 = new Proxy(sum, {
  apply: function(target, thisArg, argumentsList) {
    alert(`Буду вычислять сумму: ${argumentsList}`);
    return target.apply(thisArg, argumentsList);
  }
});
alert(proxy3(1, 2));

// 2.6. construct
// Ловушка construct(target, argumentsList) перехватывает вызовы при помощи new.
// Она получает исходный объект target и список аргументов argumentsList.

// 2.7. Остальные "перехватчики":
// * getPrototypeOf – перехватывает обращение к методу getPrototypeOf.
// * setPrototypeOf – перехватывает обращение к методу setPrototypeOf.
// * isExtensible – перехватывает обращение к методу isExtensible.
// * preventExtensions – перехватывает обращение к методу preventExtensions.
// * getOwnPropertyDescriptor – перехватывает обращение к методу
// getOwnPropertyDescriptor.
// * defineProperty – перехватывает обращение к методу defineProperty.
// * ownKeys – перехватывает обращения к методу getOwnPropertyNames.
// Каждый перехватчик запускается с handler в качестве this. Это означает, что
// handler кроме ловушек может содержать и другие полезные свойства и методы.
// Каждый перехватчик получает в аргументах target и дополнительные параметры в
// зависимости от типа. Если перехватчик в handler не указан, то операция
// совершается, как если бы была вызвана прямо на target.

// P.S. (из комментариев): с помощью прокси можно, например, организовать
// приватные свойства.