
const sliderAbout=new Swiper(".slider-about",{grabCursor:!0,centeredSlides:!0,slidesPerView:3,loop:!0,autoplay:{delay:1e3},breakpoints:{320:{slidesPerView:1,loop:!1},480:{slidesPerView:1.5,loop:!1},640:{slidesPerView:4}}});var swiper=new Swiper("#teste",{slidesPerView:3,spaceBetween:30,"navegação":{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const btnOpenContact=document.querySelector("#openContact"),containerContact=document.querySelector(".contact .contact-container"),closeContact=document.querySelector(".close");btnOpenContact.onclick=()=>{"100%"==containerContact.style.width?containerContact.style.width="0%":containerContact.style.width="100%"},closeContact.onclick=()=>{containerContact.style.width="0%"};const btnOpen=document.querySelector("#btnOpen"),sideNav=document.querySelector("#CoverRed"),triangulo=document.querySelector(".triangulo-yellow");btnOpen.onclick=()=>{"100%"==sideNav.style.width?sideNav.style.width="0%":sideNav.style.width="100%"},sideNav.onclick=()=>{sideNav.style.width="0%"},triangulo.onclick=()=>{sideNav.style.width="0%"};const galleryThumbs=new Swiper(".gallery-thumbs",{slidesPerView:"auto",centeredSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,loop:!0}),portfolio=new Swiper(".portfolio-slide",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:1.2,loop:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},thumbs:{swiper:galleryThumbs},pagination:{el:".swiper-pagination",clickable:!0}});swiper=new Swiper(".slide-home",{speed:400,grabCursor:!0,keyboard:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}}),swiper=new Swiper("#types-card",{slidesPerView:1,spaceBetween:10,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{100:{slidesPerView:2,spaceBetween:20},250:{slidesPerView:3,spaceBetween:20},359:{slidesPerView:3.5,spaceBetween:20},480:{slidesPerView:5.5,spaceBetween:30},640:{slidesPerView:5.5,spaceBetween:40}}});


