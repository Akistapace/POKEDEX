const sliderAbout=new Swiper(".slider-about",{grabCursor:!0,centeredSlides:!0,slidesPerView:3,loop:!0,autoplay:{delay:1e3},breakpoints:{320:{slidesPerView:1,loop:!1},480:{slidesPerView:1.5,loop:!1},640:{slidesPerView:4}}}),btnOpenContact=document.querySelector("#openContact"),containerContact=document.querySelector(".contact .contact-container"),modal=containerContact.querySelector(".contact-modal"),closeContact=document.querySelector(".close"),closeModal=()=>{modal.style.width="0%",modal.style.padding="0%",modal.style.overflowX="hidden",setTimeout(()=>{containerContact.style.display="none"},400)},midiaQuerie=()=>{window.matchMedia("(max-width: 499px)").matches?setTimeout(()=>{modal.style.width="calc(90% - 30px)",modal.style.padding="15px",modal.style.overflow="initial"},300):setTimeout(()=>{modal.style.width="calc(100% - 30px)",modal.style.padding="15px",modal.style.overflow="initial"},300)};btnOpenContact.onclick=()=>{"100%"==containerContact.style.width?closeModal():(containerContact.style.display="block",midiaQuerie())},closeContact.onclick=()=>{closeModal()},window.onclick=function(e){e.target==containerContact&&closeModal()};const btnOpen=document.querySelector("#btnOpen"),sideNav=document.querySelector("#CoverRed"),triangulo=document.querySelector(".triangulo-yellow"),nav=document.querySelector(".nav"),spanText=document.querySelector(".nav-content #btnOpen span");btnOpen.onclick=()=>{"0%"==sideNav.style.width?(sideNav.style.width="100%",nav.style.position="fixed",spanText.innerHTML="Abrir"):(sideNav.style.width="0%",nav.style.position="absolute",spanText.innerHTML="")},sideNav.onclick=()=>{sideNav.style.width="0%",nav.style.position="absolute",spanText.innerHTML=""},triangulo.onclick=()=>{sideNav.style.width="0%",nav.style.position="absolute",spanText.innerHTML=""};const galleryThumbs=new Swiper(".gallery-thumbs",{slidesPerView:"auto",centeredSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,loop:!0}),portfolio=new Swiper(".portfolio-slide",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:1.2,loop:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1},thumbs:{swiper:galleryThumbs},pagination:{el:".swiper-pagination",clickable:!0}});var panel=new Swiper(".home-container-cover .slide-home",{speed:400,grabCursor:!0,keyboard:!0,slidesPerView:1,navigation:{nextEl:".home-container-cover .button-next",prevEl:".home-container-cover .button-prev"},pagination:{el:".home-container-cover .swiper-pagination",clickable:!0}});panel.on("slideChangeTransitionEnd",function(){scrollbody()});const animations=()=>{var e=document.querySelector(".arrow-down");e.classList.add("fadeIn"),setTimeout(()=>{e.classList.remove("fadeIn")},2e3),setTimeout(()=>{e.classList.add("bounce")},2e3)},scrollbody=()=>{for(var e=document.querySelectorAll(".slide-home .swiper-slide"),o=0,t=0;t<e.length;t++)o+=1;for(t=0;t<e.length;t++)e[o-1].classList.contains("swiper-slide-active")?(console.log("Encontrado o ultimo slider"),animations(),document.body.style.overflowY="auto"):(console.log("Não encontrado o ultimo slider"),document.body.style.overflow="hidden",document.querySelector(".arrow-down").classList.remove("bounce"))};function Scroll(){let e=document.querySelector(".cards-group"),o=document.querySelector(".cover-white"),t=document.querySelectorAll(".stripes");e.getBoundingClientRect().top<window.innerHeight==!0&&(o.querySelector("img").classList.add("spin"),setTimeout(()=>{t.forEach(e=>{e.style.width=0})},1400),setTimeout(()=>{o.classList.add("up")},1500),setTimeout(()=>{document.body.style.overflowX="hidden",o.classList.add("left")},2200),window.removeEventListener("scroll",Scroll))}window.onload=()=>{document.querySelector("#topo").getBoundingClientRect().top<0&&document.querySelector("#topo").getBoundingClientRect().top<0&&window.scrollTo(0,0)},window.addEventListener("scroll",Scroll);let seeMoreBtn=document.querySelector("#seeMoreBtn"),boxBlue=document.querySelector(".cards-group");seeMoreBtn.addEventListener("click",()=>{"Ver Mais"==seeMoreBtn.innerHTML?(seeMoreBtn.innerHTML="Ver Menos",boxBlue.style.overflow="initial",boxBlue.style.maxHeight="100%"):(seeMoreBtn.innerHTML="Ver Mais",boxBlue.style.overflow="hidden",boxBlue.style.maxHeight="300px",document.querySelector(".cards").scrollIntoView(!1))});var swiper=new Swiper("#types-card",{slidesPerView:1,spaceBetween:10,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{100:{slidesPerView:2,spaceBetween:20},250:{slidesPerView:3,spaceBetween:20},359:{slidesPerView:3.5,spaceBetween:20},480:{slidesPerView:5.5,spaceBetween:30},640:{slidesPerView:5.5,spaceBetween:40}}});