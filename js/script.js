var orderLink = document.querySelector(".button-about-contacts");
var orderPopup = document.querySelector(".popup-order");
var orderClose = orderPopup.querySelector(".popup-order-close");
var orderForm = orderPopup.querySelector(".order-form");
var userNameInput = orderPopup.querySelector(".user-name-input");
var userEmailInput = orderPopup.querySelector(".user-email-input");
var userCommentTextarea = orderPopup.querySelector(".user-comment-textarea");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

orderLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.add("modal-show");
  userNameInput.focus();
});

if (storage) {
  userNameInput.value = storage;
  userEmailInput.focus();
} else {
  orderPopup.focus();
}
orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
  orderPopup.classList.remove("modal-error");
});

orderForm.addEventListener("submit", function (evt) {
  if (!userNameInput.value || !userEmailInput.value || !userCommentTextarea.value) {
  evt.preventDefault();
  orderPopup.classList.add("modal-error");
}else {
    localStorage.setItem("login", userNameInput.value);
    localStorage.setItem("email", userEmailInput.value);
  });

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
