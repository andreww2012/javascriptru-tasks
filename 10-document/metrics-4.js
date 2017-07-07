// Поместите мяч в центр поля.
// * Менять CSS нельзя, мяч должен переносить в центр ваш скрипт, через
// установку нужных стилей элемента.
// * JavaScript-код должен работать при разных размерах мяча (10, 20, 30
// пикселей) без изменений.
// * JavaScript-код должен работать при различных размерах и местоположениях
// поля на странице без изменений. Также он не должен зависеть от ширины рамки
// поля border.

let field = document.getElementById("field");
let ball = document.getElementById("ball");

ball.style.left = Math.round((field.clientWidth - ball.offsetWidth) / 2) + "px";
ball.style.top = Math.round((field.clientHeight - ball.offsetHeight) / 2)
+ "px";
