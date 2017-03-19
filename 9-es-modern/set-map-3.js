// Это не решение задачи, а примеры использования новых возможностей плюс их краткое описание.
// Записываю для себя. Полная статья: http://learn.javascript.ru/set-map

// 1. WeakMap и WeakSet
// WeakSet/WeakMap – особый вид Set/Map не препятствующий сборщику мусора удалять свои элементы.
// То есть, если некий объект присутствует только в WeakSet/WeakMap – он удаляется из памяти.
// Это нужно для тех ситуаций, когда основное место для хранения и использования объектов находится где-то в
// другом месте кода, а здесь мы хотим хранить для них «вспомогательные» данные, существующие лишь пока жив объект.
// WeakMap избавляет нас от необходимости вручную удалять вспомогательные данные, когда удалён основной объект.

// 2. Ограничения
// У WeakMap есть ряд ограничений:
// - Нет свойства size.
// - Нельзя перебрать элементы итератором или forEach.
// - Нет метода clear().
// Это связано с тем, что содержимое WeakMap может быть модифицировано сборщиком мусора в любой момент,
// независимо от программиста.
// То же самое относится и к WeakSet: можно добавлять элементы, проверять их наличие,
// но нельзя получить их список и даже узнать количество.