// import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';
// Swiper.use([Navigation, Pagination, Autoplay]);

    var swiper = new Swiper('.slide-home', {
        speed: 400,
        spaceBetween: 30,
        grabCursor:true,
        keyboard: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
