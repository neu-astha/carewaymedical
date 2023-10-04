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
      nextEl: ".fa-solid",
    },
  });