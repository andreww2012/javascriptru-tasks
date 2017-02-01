// Добавить в конструктор Article:
// Подсчёт общего количества созданных объектов.
// Запоминание даты последнего созданного объекта.
// Используйте для этого статические свойства.
// Пусть вызов Article.showStats() выводит то и другое.

function Article() {
  this.created = new Date();
  Article.lastCreated = this.created;
  Article.count++;
}
Article.count = 0;

Article.showStats = function() {
  alert("Всего " + Article.count + ", Последняя: " + Article.lastCreated);
};