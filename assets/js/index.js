const swiperTopbar = new Swiper(".header-topbar-slider", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const swiperBanner = new Swiper(".slider-content", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const swiperBestSeller = new Swiper(".bestSeller-slider", {
  speed: 800,
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 100,
      autoplay: false,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 113,
    },
  },
  navigation: {
    nextEl: ".bestSeller-next",
    prevEl: ".bestSeller-prev",
  },
});

const swiperTestimonials = new Swiper(".testimonials-slider-container", {
  direction: "horizontal",
  speed: 800,
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      autoplay: false,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 43,
    },
  },
  navigation: {
    nextEl: ".testimonials-slider .swiper-button-next",
    prevEl: ".testimonials-slider .swiper-button-prev",
  },
});

//quantity
const plusbtn = document.querySelectorAll(".plus");
plusbtn.forEach((plus) => {
  plus.addEventListener("click", () => {
    const quantity = plus.parentElement.querySelector(".qty");
    quantity.value = parseInt(quantity.value) + 1;
  });
});

const swiperRelated = new Swiper(".related-product", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 28,
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      autoplay: false,
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const minusbtn = document.querySelectorAll(".minus");
minusbtn.forEach((minus) => {
  minus.addEventListener("click", () => {
    const quantity = minus.parentElement.querySelector(".qty");
    if (parseInt(quantity.value) > 0) {
      quantity.value = parseInt(quantity.value) - 1;
    }
  });
});

//filter
const filterItems = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item"
);

const checkboxItems = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item-criteria li"
);

filterItems.forEach((filterItem) => {
  // Clear Filter
  if (filterItem.querySelector(".clear-button")) {
    filterItem.querySelector(".clear-button").addEventListener("click", () => {
      filterItem
        .querySelectorAll(".products-filter-item-criteria li .checkbox")
        .forEach((checkbox) => {
          checkbox.setAttribute("data-status", "uncheck");
        });
    });
  }
});

checkboxItems.forEach((checkboxItem) => {
  // Select box
  checkboxItem.addEventListener("click", () => {
    if (
      checkboxItem.querySelector(".checkbox").getAttribute("data-status") ==
      "uncheck"
    ) {
      checkboxItem
        .querySelector(".checkbox")
        .setAttribute("data-status", "check");
    } else {
      checkboxItem
        .querySelector(".checkbox")
        .setAttribute("data-status", "uncheck");
    }
  });
});

const inputs = document.querySelectorAll("input");
Array.from(inputs).forEach((input) => {
  const placeHolderCurrent = input.getAttribute("placeholder");
  input.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
    const clearInput = this.parentElement.querySelector(".clear-input");

    if (clearInput) {
      // show x when focus
      clearInput.classList.remove("d-none");
      this.addEventListener("input", function () {
        if (this.value == "") {
          clearInput.querySelector(".clear-input svg path").style.fill =
            "#c8c8c8";
        } else {
          clearInput.querySelector(".clear-input svg path").style.fill = "#000";
        }
      });

      // click x clear input
      clearInput.addEventListener("click", () => {
        clearInput.previousElementSibling.value = "";
        clearInput.querySelector("svg path").style.fill = "#c8c8c8";
        input.focus();
      });
    }
    this.addEventListener("focusout", function (e) {
      this.setAttribute("placeholder", placeHolderCurrent);
      if (this.value == "") {
        this.style.outline = "none";
      }
    });

    // click outside input
    window.addEventListener("click", (e) => {
      if (
        e.target.parentElement == input.parentElement ||
        e.target.parentElement.parentElement == input.parentElement ||
        e.target.parentElement.parentElement.parentElement ==
          input.parentElement
      ) {
        return false;
      } else {
        if (clearInput) {
          clearInput.classList.add("d-none");
        }
      }
    });
  });
});

// password show/hide
const passwordInputs = document.querySelectorAll(".password-input");
Array.from(passwordInputs).forEach((passwordInput) => {
  passwordInput.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    console.log(input.type);
    if (input.type == "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});
