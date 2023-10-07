var swiper = new Swiper(".homeSwiper", {
  loop: true,
  effect: "fade",
  speed: 2000,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".homeslidernav.swiper-button-next",
  },
});

var swiper = new Swiper(".beforeafter", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
  speed: 5000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});


var swiper = new Swiper(".testimonials", {
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: ".testimonialnav.swiper-button-next",
    prevEl: ".testimonialnav.swiper-button-prev",
  },
});