    var panel = new Swiper('.home-container-cover .slide-home', {
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

    panel.on('reachEnd', function () {
        scrollbody()
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
        console.log('Encontrado o ultimo slider')
        animations()
        document.body.style.overflowY = 'auto' 
    }
      

    window.onload = ()=> {
        var ancora =  document.querySelector('#topo')
        if(ancora.getBoundingClientRect().top < 0 ) {
            var ancora =  document.querySelector('#topo')
            if(ancora.getBoundingClientRect().top < 0 ) {
                window.scrollTo(0, 0);
            } 
        } 	
    }

    
        
        