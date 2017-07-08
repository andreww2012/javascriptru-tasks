// Сделайте так, что при клике по полю мяч перемещался на место клика.
// Требования:
// * Мяч после перелёта должен становиться центром ровно под курсор мыши, если
// это возможно без вылета за край поля.
// * CSS-анимация не обязательна, но желательна.
// * Мяч должен останавливаться у границ поля, ни в коем случае не вылетать за
// них.
// * При прокрутке страницы с полем ничего не должно ломаться.
// Замечания:
// * Код не должен зависеть от конкретных размеров мяча и поля.
// * Вам пригодятся свойства event.clientX/event.clientY

let field = document.getElementById("field");

field.onclick = function(event) {
  let ball = document.getElementById("ball");
  let ballWidth = ball.clientWidth;
  let ballHeight = ball.clientHeight;
  let fieldCoords = field.getBoundingClientRect();

  ball.style.top = Math.max(0, Math.min(
    event.clientY - fieldCoords.top - field.clientTop - ballHeight / 2,
    field.clientHeight - ballHeight
  )) + "px";
  ball.style.left = Math.max(0, Math.min(
    event.clientX - fieldCoords.left - field.clientLeft - ballWidth / 2,
    field.clientWidth - ballWidth
  )) + "px";
};
