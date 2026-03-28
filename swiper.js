const swiper = new Swiper(".swiper", {
  // Optional parameters
  /*effect: "fade",
  fadeEffect: {
    crossFade: true
  },*/
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
