// import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';
// Swiper.use([Navigation, Pagination, Autoplay]);

    var swiper = new Swiper('.home-container-cover .slide-home', {
        speed: 400,
        grabCursor:true,
        keyboard: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.home-container-cover .button-next',
            prevEl: '.home-container-cover .button-prev',
        },
        pagination: {
            el: '.home-container-cover .swiper-pagination',
        },
    });
