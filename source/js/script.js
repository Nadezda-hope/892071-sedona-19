//menu
var menuMain = document.querySelector('.main-menu');
var menuToggle = document.querySelector('.main-menu__toggle');

menuMain.classList.remove('main-menu--nojs');

menuToggle.addEventListener('click', function() {
  if (menuMain.classList.contains('main-menu--closed')) {
    menuMain.classList.remove('main-menu--closed');
    menuMain.classList.add('main-menu--opened');
  } else {
    menuMain.classList.add('main-menu--closed');
    menuMain.classList.remove('main-menu--opened');
  }
});

//form
var form = document.querySelector("form");
var popupError = document.querySelector(".popup--error");
var popupSuccess = document.querySelector(".popup--success");
var firstName = document.querySelector("[name=first-name]");
var surname = document.querySelector("[name=surname]");
var phone = document.querySelector("[name=phone]");
var email = document.querySelector("[name=email]");
var closeBtnError = document.querySelector(".popup__button--close");
var closeBtnSuccess = document.querySelector(".popup__button--success");

form.addEventListener("submit", function (evt) {
  if (!firstName.value || !surname.value || !phone.value || !email.value) {
    evt.preventDefault();
    popupError.classList.remove("popup--closed");
    popupError.classList.add("popup--opened");
  } else {
    popupSuccess.classList.add("popup--opened");
    popupSuccess.classList.remove("popup--closed");
  }
});

//Закрытие попапов
closeBtnError.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupError.classList.remove("popup--opened");
  popupError.classList.add("popup--closed");
});

closeBtnSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup--opened");
  popupSuccess.classList.add("popup--closed");
});
