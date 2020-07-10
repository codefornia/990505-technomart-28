var orderLink = document.querySelector(".button-about-contacts");
var orderPopup = document.querySelector(".popup-order");
var orderClose = orderPopup.querySelector(".popup-order-close");
var orderForm = orderPopup.querySelector(".order-form");
var userNameInput = orderPopup.querySelector(".user-name-input");
var userEmailInput = orderPopup.querySelector(".user-email-input");
var userCommentTextarea = orderPopup.querySelector(".user-comment-textarea");
var сartLink = document.querySelector(".buy-botton")
var cartPopup = document.querySelector(".popup-cart");
var cartClose = cartPopup.querySelector(".button-close-cart");
var buttonСontinue = cartPopup.querySelector(".button-continue");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

orderLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.add("modal-show");

  if (storage) {
    userNameInput.value = storage;
    userEmailInput.focus();
  } else {
    userNameInput.focus();
  }
});

if (storage) {
  userNameInput.value = storage;
  userEmailInput.focus();
} else {
  userNameInput.focus();
}

orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
  orderPopup.classList.remove("modal-error");
});

orderForm.addEventListener("submit", function (evt) {
  if (!userNameInput.value || !userEmailInput.value || !userCommentTextarea.value) {
  evt.preventDefault();
    orderPopup.classList.remove("modal-error");
    orderPopup.offsetWidth = orderPopup.offsetWidth;
    orderPopup.classList.add("modal-error");
}else {
    localStorage.setItem("login", userNameInput.value);
    localStorage.setItem("email", userEmailInput.value);
  }});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      orderPopup.classList.remove("modal-show");
      orderPopup.classList.remove("modal-error");
      orderPopup.classList.remove("modal-error");
    }
  }
});




сartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");


cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartClose.classList.remove("modal-show");
});

  buttonСontinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartClose.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartClose.classList.remove("modal-show");
    }
  }
});
