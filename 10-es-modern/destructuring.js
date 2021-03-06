// Это не решение задачи, а примеры использования новых возможностей плюс
// их краткое описание. Записываю для себя.
// Полная статья: http://learn.javascript.ru/destructuring

// Деструктуризация (destructuring assignment) – это особый синтаксис
// присваивания, при котором можно присвоить массив или объект сразу нескольким
// переменным, разбив его на части.
let [hello, world] = ["Hello", "World"];
alert(hello); // hello
alert(world); // world

// Ненужные элементы массива также можно отбросить, поставив лишнюю запятую:
let [, , title] = "Юлий Цезарь Император Рима".split(" ");
alert(title); // Император

// Если мы хотим получить и последующие значения массива, но не уверены в их
// числе, надо использовать оператор "..." («spread», троеточие), который
// присвоит переменной массив с оставшимися элементами:
let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
alert(rest); // Император,Рима (массив из 2х элементов)

// Если значений в массиве меньше, чем переменных – ошибки не будет, просто
// присвоится undefined:
let [var1, var2] = [];
alert(var1); // undefined

// Как правило, в таких случаях задают значение по умолчанию.
// В качестве значений по умолчанию можно использовать не только примитивы, но
// и выражения, даже включающие в себя вызовы функций.
let [var3 = "var #3", var4 = "var #4"] = [];
alert(var4); // var #4

// Деструктуризацию можно использовать и с объектами. При этом мы указываем,
// какие свойства в какие переменные должны «идти».
// Если хочется присвоить свойство объекта в переменную с другим именем,
// например, чтобы свойство options.width пошло в переменную w, то можно указать
// соответствие через двоеточие.
// Если каких-то свойств в объекте нет, можно указать значение по умолчанию
// через знак равенства =.
// Оператор "..." при деструктуризации объектов пока недоступен.
let options = {title: "Меню", width: 100};
let {title_, width: w, height: h = 200} = options;
alert(title_); // Меню
alert(w); // 100
alert(h); // 200

// Деструктуризацию можно проводить без let, но тогда нужно оборачивать всё
// выражение (при деструктуризации объекта) в круглые (чтобы js не распознал их
// как блок {}):
let a, b;
({a, b} = {a:5, b:6});

// Поддерживается вложенная Деструктуризация, при деструктуризации нужно лишь
// сохранить ту же структуру, что и исходный объект/массив.
