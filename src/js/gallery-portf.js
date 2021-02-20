var portfolio = new Swiper('.portfolio-slide', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.2,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  thumbs: {
    swiper: portfolio
  }
});