// Получите div в переменную.
// Получите значение атрибута "data-widget-name" в переменную. Выведите его.
// Документ: attributes-and-custom-properties-1.html

let div = document.getElementById("widget");

let widgetName = div.dataset.widgetName;

console.log(widgetName);
