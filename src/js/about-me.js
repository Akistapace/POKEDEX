const sliderAbout = new Swiper('.slider-about', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 1000,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          loop: false,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          loop: false,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
        }
      }
  })