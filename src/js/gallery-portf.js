const galleryThumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 'auto',
  centeredSlides: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  loop: true,
});
const portfolio = new Swiper('.portfolio-slide', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  thumbs: {
    swiper: galleryThumbs
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
