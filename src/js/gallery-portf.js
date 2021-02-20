const galleryThumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 'auto',
  centeredSlides: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const portfolio = new Swiper('.portfolio-slide', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  thumbs: {
    swiper: galleryThumbs
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
