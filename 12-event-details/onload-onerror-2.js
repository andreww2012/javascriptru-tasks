// Создайте функцию preloadImages(sources, callback), которая предзагружает
// изображения из массива sources, и после загрузки вызывает функцию callback.
// Пример использования:
/*
preloadImages(["1.jpg", "2.jpg", "3.jpg"], callback);
*/
// Если вдруг возникает ошибка при загрузке – считаем такое изображение
// загруженным, чтобы не ломать поток выполнения.
// Такая функция может полезна, например, для фоновой загрузки картинок в
// онлайн-галерею.

function preloadImages(sources, callback) {
  const imagesCount = sources.length;
  let loaded = 0;

  sources.forEach((x) => {
    let image = document.createElement("img");
    image.src = x;

    image.onload = image.onerror = () => {
      loaded++;
      if (loaded == imagesCount) {
        callback();
      }
    };
  });
}
