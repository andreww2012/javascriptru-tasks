// Создайте кнопку в виде элемента <a> с заданным стилем, используя JavaScript.
// В примере ниже такая кнопка создана при помощи HTML/CSS. В вашем решении
// кнопка должна создаваться, настраиваться и добавляться в документ при помощи
// только JavaScript, без тегов <style> и <a>.
// Стиль:
/*
.button {
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  border: 2px groove green;
  display: block;
  height: 30px;
  line-height: 30px;
  width: 100px;
  text-decoration: none;
  text-align: center;
  color: red;
  font-weight: bold;
}
*/

let button = document.createElement("a");
button.innerHTML = "Нажми меня";

button.style.cssText = "-moz-border-radius: 8px;\
  -webkit-border-radius: 8px;\
  border-radius: 8px;\
  border: 2px groove green;\
  display: block;\
  height: 30px;\
  line-height: 30px;\
  width: 100px;\
  text-decoration: none;\
  text-align: center;\
  color: red;\
  font-weight: bold;";

// Более безопасный вариант:
let butStyle = button.style;
butStyle.mozBorderRadius = butStyle.webkitBorderRadius = butStyle.borderRadius =
"8px"
butStyle.border = "2px groove green";
butStyle.display = "block";
butStyle.height = "30px";
butStyle.lineHeight = "30px";
butStyle.width = "100px";
butStyle.textDecoration = "none";
butStyle.textAlign = "center";
butStyle.color = "red";
butStyle.fontWeight = "bold";
