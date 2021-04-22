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
            clickable: true,
        },
    });


    const animations = ()=> {
        var animationArrow = document.querySelector('.arrow-down')
        animationArrow.classList.add('fadeIn')
        setTimeout(() => {
            animationArrow.classList.remove('fadeIn')
        }, 2000);
        setTimeout(() => {
            animationArrow.classList.add('bounce')
        }, 2000);
    }

    const scrollbody = ()=> {
        var slides = document.querySelectorAll(".slide-home .swiper-slide")
        var nSlides = 0
        for (var i = 0; i < slides.length; i++) {
            nSlides = nSlides+1
        }
        for (var i = 0; i < slides.length; i++) {
           if (slides[nSlides-1].classList.contains('swiper-slide-active')) {
               console.log('Encontrado o ultimo slider')
               animations()
               document.body.style.overflow = 'auto'
           } else {
               console.log('Não encontrado o ultimo slider')
               document.body.style.overflow = 'hidden'
               var animationArrow = document.querySelector('.arrow-down')
               animationArrow.classList.remove('bounce')
           }
        }
    }
   
    const botoesPainel = document.querySelectorAll("[btns-panel]")
    for (var i = 0; i < botoesPainel.length; i++) {
        botoesPainel[i].addEventListener('click', ()=> {
            scrollbody()
        });
    }