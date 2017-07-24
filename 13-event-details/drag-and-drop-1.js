// Создайте слайдер: https://vk.cc/6RELff
// Важно:
// * Слайдер должен нормально работать при резком движении мыши влево или
// вправо, за пределы полосы. При этом бегунок должен останавливаться четко в
// нужном конце полосы.
// * При нажатом бегунке мышь может выходить за пределы полосы слайдера, но
// слайдер пусть все равно работает (это удобно для пользователя).

let slider = document.getElementById("slider");
let sliderThumb = slider.firstElementChild;

sliderThumb.ondragstart = () => false;

sliderThumb.onmousedown = (e) => {

  let sliderCoords = slider.getBoundingClientRect();

  document.onmousemove = (e) => {
    sliderThumb.style.left = Math.min(
      Math.max(0, e.pageX - sliderCoords.left),
      slider.offsetWidth - sliderThumb.offsetWidth
    ) + "px";
  };

  document.onmouseup = (e) => {
    document.onmousemove = null;
    document.onmouseup = null;
  };

  return false;
};
