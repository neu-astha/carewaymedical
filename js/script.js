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

var swiper = new Swiper(".beforeafterimages", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
});

var mySwiper = new Swiper(".beforeaftervideos", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
});
$('.beforeaftervideos').on('mouseenter', function(e){
  console.log('stop autoplay');
  mySwiper.autoplay.stop();
})
$('.beforeaftervideos').on('mouseleave', function(e){
  console.log('start autoplay');
  mySwiper.autoplay.start();
})



var swiper = new Swiper(".testimonials", {
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: ".testimonialnav.swiper-button-next",
    prevEl: ".testimonialnav.swiper-button-prev",
  },
});