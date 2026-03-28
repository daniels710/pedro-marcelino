function carousel() {
  let splides = $("#carrossel");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      perPage: 4,
      breakpoints: {
        // when window width is <= 991px
        991: {
          perPage: 3
        },
        // when window width is <= 767px
        767: {
          perPage: 2
        },
        // when window width is <= 479px
        479: {
          perPage: 1.5
        }
      },
      arrows: false,
      pagination: false,
      focus: "center",
      direction: "ltr",
      gap: 8,
      type: "loop",
      autoScroll: {
        autoStart: true,
        speed: 0.6,
        pauseOnHover: false
      },
      drag: false
    }).mount(window.splide.Extensions);
  }
}
carousel();
