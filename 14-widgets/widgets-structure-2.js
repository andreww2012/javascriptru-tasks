// Перепишите слайдер (12-event-details/drag-and-drop-1.js) в виде компонента.

function Slider(options) {
  let slider = options.elem;
  let sliderThumb = slider.firstElementChild;

  function documentOnMouseMove(e) {
    let sliderCoords = slider.getBoundingClientRect();

    sliderThumb.style.left = Math.min(
      Math.max(0, e.pageX - sliderCoords.left),
      slider.offsetWidth - sliderThumb.offsetWidth
    ) + "px";
  }

  function documentOnMouseUp() {
    document.removeEventListener("mousemove", documentOnMouseMove);
    document.removeEventListener("mouseup", documentOnMouseUp);
  }

  sliderThumb.ondragstart = () => false;

  sliderThumb.onmousedown = (e) => {
    document.addEventListener("mousemove", documentOnMouseMove);
    document.addEventListener("mouseup", documentOnMouseUp);

    return false;
  };
}
