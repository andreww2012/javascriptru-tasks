// На основе слайдера из задачи Слайдер-компонент (widgets-structure-2.js)
// создайте графический компонент, который умеет возвращать/получать значение.
// Синтаксис:
/*
var slider = new Slider({
  elem: document.getElementById('slider'),
  max: 100 // слайдер на самой правой позиции соответствует 100
});
*/
// Метод setValue устанавливает значение:
/*
slider.setValue(50);
*/
// У слайдера должно быть два события: slide при каждом передвижении и change
// при отпускании мыши (установке значения).

function Slider(options) {
  let slider = options.elem;
  let sliderThumb = slider.firstElementChild;
  const maxValue = options.max || 100;
  const pixelsPerValue = (slider.clientWidth - sliderThumb.clientWidth)
    / maxValue;
  let currentValue = positionToValue(window.getComputedStyle(sliderThumb).left);

  function positionToValue(left) {
    return Math.round(left / pixelsPerValue);
  }

  function valueToPosition(value) {
    return pixelsPerValue * value;
  }

  function dispatchSlideEvent() {
    slider.dispatchEvent(new CustomEvent("slide", {
      bubbles: true,
      detail: currentValue
    }));
  }

  function dispatchChangeEvent() {
    slider.dispatchEvent(new CustomEvent("change", {
      bubbles: true,
      detail: currentValue
    }));
  }

  function setValue(value) {
    currentValue = value = Math.min(value, maxValue);
    sliderThumb.style.left = valueToPosition(value) + "px";
  }

  function documentOnMouseMove(e) {
    let sliderCoords = slider.getBoundingClientRect();

    setValue(positionToValue(Math.min(
      Math.max(0, e.pageX - sliderCoords.left),
      slider.offsetWidth - sliderThumb.offsetWidth
    )));
    dispatchSlideEvent();
  }

  function documentOnMouseUp() {
    document.removeEventListener("mousemove", documentOnMouseMove);
    document.removeEventListener("mouseup", documentOnMouseUp);
    dispatchChangeEvent();
  }

  sliderThumb.ondragstart = () => false;

  sliderThumb.onmousedown = (e) => {
    document.addEventListener("mousemove", documentOnMouseMove);
    document.addEventListener("mouseup", documentOnMouseUp);

    return false;
  };

  this.setValue = setValue;
}
