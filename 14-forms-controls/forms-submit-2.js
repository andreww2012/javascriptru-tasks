// Напишите функцию validate(form), которая проверяет содержимое формы по клику
// на кнопку «Проверить».
// Ошибки:
// * Одно из полей не заполнено.
// * Пароли не совпадают.
// Ошибка должна сопровождаться сообщением у поля.

function validate(form) {
  let formFrom = form.elements.from;
  let formPassword = form.elements.password;
  let formPassword2 = form.elements.password2;
  let formMessage = form.elements.message;
  let formTo = form.elements.to;

  checkElem(formFrom, formFrom.value == "");
  checkElem(formPassword, formPassword.value == "");
  checkElem(formPassword2, formPassword2.value != formPassword.value);
  checkElem(formMessage, formMessage.value == "");
  checkElem(formTo, formTo.options[formTo.selectedIndex].text == "");

  function checkElem(elem, errorCondition) {
    let elemParent = elem.parentNode;

    if (!elemParent.classList.contains("error") && errorCondition) {
      elemParent.classList.add("error");
      let span = document.createElement("span");
      span.innerHTML = `${elem.dataset.error}`;
      elemParent.appendChild(span);
    } else if (!errorCondition) {
      elemParent.classList.remove("error");
      if (elemParent.lastElementChild.tagName == "SPAN") {
        elemParent.removeChild(elemParent.lastElementChild);
      }
    }
  }


}
