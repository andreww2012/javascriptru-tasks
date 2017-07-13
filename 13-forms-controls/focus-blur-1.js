// Реализуйте более удобный плейсхолдер-подсказку на JavaScript через атрибут
// data-placeholder.
// Правила работы плейсхолдера:
// * Элемент изначально содержит плейсхолдер. Специальный класс placeholder
// придает ему синий цвет.
// * При фокусировке плейсхолдер показывается уже над полем, становясь
// «подсказкой».
// * При снятии фокуса, подсказка убирается, если поле пустое – плейсхолдер
// возвращается в него.

let input = document.getElementsByTagName("input")[0];

showPlaceholder(input);

function showPlaceholder(input) {
  input.classList.add("placeholder");
  input.value = input.dataset.placeholder;
}

input.onfocus = () => {
  if (input.classList.contains("placeholder")) {
    input.classList.remove("placeholder");
    input.value = "";
  }

  let tooltip = document.createElement("div");
  tooltip.className = "placeholder-tooltip";
  tooltip.innerHTML = input.dataset.placeholder;
  tooltip.style.left = input.getBoundingClientRect().left + "px";
  // Почему вставаляем "посередине"? Чтобы было свойство offsetHeight
  document.body.appendChild(tooltip);
  tooltip.style.top = input.getBoundingClientRect().top - tooltip.offsetHeight - 4 + "px";

  // P. S. В предложенном решении тултипу устанавливался размер шрифта, равный
  // размеру шрифта инпута. В этом решении подразумевается установка нужного
  // размера шрифта через CSS.

  input.tooltip = tooltip;
};

input.onblur = () => {
  document.body.removeChild(input.tooltip);

  if (input.value == "") {
    showPlaceholder(input);
  }
};
