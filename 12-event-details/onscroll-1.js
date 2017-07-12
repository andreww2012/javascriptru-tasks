// Сделайте так, чтобы при прокрутке ниже элемента #avatar (картинка с
// Винни-Пухом) – он продолжал показываться в левом-верхнем углу.
// При прокрутке вверх – должен возвращаться на обычное место.

const avatar = document.getElementById("avatar");
const avatarBottomPageCoord = avatar.getBoundingClientRect().bottom +
  window.pageYOffset;

document.onscroll = function(e) {
  const isAvatarFixed = avatar.classList.contains("fixed");

  if (!isAvatarFixed && window.pageYOffset > avatarBottomPageCoord
    || isAvatarFixed && window.pageYOffset < avatarBottomPageCoord) {
    avatar.classList.toggle("fixed");
  }
};
