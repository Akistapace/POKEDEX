const btnPlay=document.querySelector(".btn-play"),pause=document.querySelector(".btn-pause"),volUp=document.querySelector(".btn-volup"),volDown=document.querySelector(".btn-voldown"),btns=document.querySelector(".btns-audio");btns.onclick=function(){btnPlay.classList.toggle("d-block"),btnPlay.style.transition,pause.classList.toggle("d-block"),volUp.classList.toggle("d-block"),volDown.classList.toggle("d-block")};var swiper=new Swiper("#teste",{slidesPerView:3,spaceBetween:30,"navegação":{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),galleryThumbs=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0}),galleryTop=new Swiper(".gallery-top",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:galleryThumbs}}),swiper=new Swiper(".slide-home",{speed:400,spaceBetween:30,grabCursor:!0,keyboard:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}}),swiper=new Swiper("#types-card",{slidesPerView:1,spaceBetween:10,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{100:{slidesPerView:2,spaceBetween:20},250:{slidesPerView:3,spaceBetween:20},359:{slidesPerView:3.5,spaceBetween:20},480:{slidesPerView:5.5,spaceBetween:30},640:{slidesPerView:5.5,spaceBetween:40}}});