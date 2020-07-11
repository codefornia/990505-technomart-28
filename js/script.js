var orderLink = document.querySelector(".button-about-contacts");
var orderPopup = document.querySelector(".popup-order");
var orderClose = orderPopup.querySelector(".popup-order-close");
var orderForm = orderPopup.querySelector(".order-form");
var userNameInput = orderPopup.querySelector(".user-name-input");
var userEmailInput = orderPopup.querySelector(".user-email-input");
var userCommentTextarea = orderPopup.querySelector(".user-comment-textarea");
var cartLinks = document.querySelectorAll(".buy-botton");
var cartPopup = document.querySelector(".popup-cart");
var cartClose = cartPopup.querySelector(".button-close-cart");
var buttonContinue = cartPopup.querySelector(".button-continue");
var mapPopup = document.querySelector(".popup-map");
var mapLink = document.querySelector(".interactive-map");
var mapClose = document.querySelector(".button-close-map");


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
  } else {
    localStorage.setItem("login", userNameInput.value);
    localStorage.setItem("email", userEmailInput.value);
  }
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


for (let cartLink of cartLinks) {
  cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

buttonContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

let sliders = document.getElementsByClassName('slider');

for (let slider of sliders) {
  const leftButton = slider.querySelector('.slide-button-left');
  const rightButton = slider.querySelector('.slide-button-right');
  const radioButtons = slider.querySelectorAll('.radio-control');

  leftButton.addEventListener('click', () => {
    moveLeft(slider);
  });

  rightButton.addEventListener('click', () => {
    moveRight(slider);
  });

  let i = 0;
  for (let radioButton of radioButtons) {
    const currentI = i;
    radioButton.addEventListener('click', () => {
      const currentButton = slider.querySelector('.radio-control-current');
      const currentSlide = slider.querySelector('.promo-slide-current');
      if (currentButton) {
        currentButton.classList.remove('radio-control-current');
      }
      if (currentSlide) {
        currentSlide.classList.remove('promo-slide-current');
      }
      radioButton.classList.add('radio-control-current');
      slider.querySelectorAll('.promo-slide')[currentI].classList.add('promo-slide-current');
    });
    i += 1;
  }

  setInterval(() => {
    moveRight(slider);
  }, 10000);
}

function moveRight(slider) {
  const slides = slider.querySelectorAll('.promo-slide');
  let i = 0;
  let current = -1;
  let next = -1;
  for (let slide of slides) {
    if (slide.classList.contains('promo-slide-current')) {
      current = i;
    }
    i += 1;
    slide.classList.remove('promo-slide-current');
  }
  if (current === slides.length - 1) {
    next = 0;
  } else {
    next = current + 1;
  }
  slides[next].classList.add('promo-slide-current');
  setActiveButton(slider, next);
}

function moveLeft(slider) {
  const slides = slider.querySelectorAll('.promo-slide');
  let i = 0;
  let current = slides.length;
  let next = slides.length;
  for (let slide of slides) {
    if (slide.classList.contains('promo-slide-current')) {
      current = i;
    }
    i += 1;
    slide.classList.remove('promo-slide-current');
  }
  if (current === 0) {
    next = slides.length - 1;
  } else {
    next = current - 1;
  }
  slides[next].classList.add('promo-slide-current');
  setActiveButton(slider, next);
}

function setActiveButton(slider, index) {
  const Buttons = slider.querySelectorAll('.radio-control');
  let i = 0;
  for (let Button of Buttons) {
    Button.classList.remove('radio-control-current');
    if (i === index) {
      Button.classList.add('radio-control-current');
    }
    i += 1;
  }
}


const tabsBlocks = document.getElementsByClassName('main-service-block');
let i = 0;
for (const tabsBlock of tabsBlocks) {
  const buttons = tabsBlock.getElementsByClassName('tabs-button');
  for (const button of buttons) {
    const currentI = i;
    button.addEventListener('click', () => {
      const currentButton = tabsBlock.querySelector('.tabs-button-current');
      const currentContent = tabsBlock.querySelector('.content-block-current');
      if (currentButton) {
        currentButton.classList.remove('tabs-button-current');
      }
      if (currentContent) {
        currentContent.classList.remove('content-block-current');
      }
      button.classList.add('tabs-button-current');
      tabsBlock.querySelectorAll('.content-block')[currentI].classList.add('content-block-current');
    });
    i += 1;
  }
}
