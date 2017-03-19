// Есть массив URL urls. Напишите код, который все URL из этого массива загружает – один за другим
// (последовательно), и сохраняет в результаты в массиве results, а потом выводит.
// В этой задаче загрузку нужно реализовать последовательно.

let urls = [
  'user.json',
  'guest.json'
];

// НАЧАЛО РЕШЕНИЯ
let results = [];
let chain = Promise.resolve();

urls.forEach(url => {
  chain = chain
    .then(() => httpGet(url))
    .then(result => results.push(result));
});