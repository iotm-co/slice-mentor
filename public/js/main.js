// setting slider
const slider = new Swiper(".slider", {
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

// setting card cube swiperjs
const cube = new Swiper(".card-cube", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 15,
    shadowScale: 0.8,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// setting card slide autoplay
const autoplay = new Swiper(".slide-autoplay", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    // reverseDirection: true,
  },
});

// menu toggle
const scrollNav = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  scrollNav.classList.toggle("header-fixed", this.scrollY > 0);
});

// menu toggle /  hamburger
const navigation = document.querySelector("#navigation");
const btnToggle = document.querySelector(".menu-hamburger");
const icon = document.querySelector(".bx-menu-alt-right");

btnToggle.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");
  icon.classList.toggle("bx-x");

  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
  }
});

// reload browser
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  window.location.reload();
});

// setting accordion
const accordion = document.querySelectorAll(".accordion");
const accordionIcon = document.querySelector(".bx-plus");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
