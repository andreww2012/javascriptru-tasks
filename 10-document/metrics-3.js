// Был текст, который, в частности, содержал div с зелеными границами:
/*
<style>
  #moving-div {
    border: 5px groove green;
    padding: 5px;
    margin: 10px;
    background-color: yellow;
  }
</style>

Before Before Before

<div id="moving-div">
Text Text Text<br>
Text Text Text<br>
</div>

After After After
*/
// Программист написал код, который позиционирует его абсолютно и смещает в
// правый верхний угол. Вот этот код:
/*
var div = document.getElementById('moving-div');
div.style.position = 'absolute';
div.style.right = div.style.top = 0;
*/
// Побочным результатом явилось смещение текста, который раньше шел после DIV.
// Допишите код программиста, сделав так, чтобы текст оставался на своем месте
// после того, как DIV будет смещен.
// Сделайте это путем создания вспомогательного DIV с теми же width, height,
// border, margin, padding, что и у жёлтого DIV.
// Используйте только JavaScript, без CSS.

var div = document.getElementById('moving-div');
div.style.position = 'absolute';
div.style.right = div.style.top = 0;

// Начало решения
let pseudoDiv = document.createElement("div");
pseudoDiv.style.height = div.offsetHeight;
pseudoDiv.style.marginTop = getComputedStyle(div, "").marginTop;
pseudoDiv.style.marginBottom = getComputedStyle(div, "").marginBottom;

// вставляем pseudoDiv...
