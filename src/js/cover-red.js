    const btnOpen = document.querySelector("#btnOpen")
    const sideNav = document.querySelector("#CoverRed")
    const triangulo = document.querySelector(".triangulo-yellow")
    const nav = document.querySelector(".nav")
    const body = document.body
    const spanText = document.querySelector(".nav-content #btnOpen span")

    btnOpen.onclick =  ()=> { 
        if (sideNav.style.width == '100%') {
            sideNav.style.width = '0%'
            nav.style.position = 'absolute'
            body.style.overflow = 'auto'
            spanText.style.position = 'initial'
        } else {
            sideNav.style.width = '100%'
            nav.style.position = 'fixed'
            body.style.overflow = 'hidden'
            spanText.style.position = 'absolute'
        }
    }

    sideNav.onclick =  ()=> {
        sideNav.style.width = '0%'
        nav.style.position = 'absolute'
        body.style.overflow = 'auto'
        spanText.style.position = 'initial'
    };
    
    triangulo.onclick =  ()=> {
        sideNav.style.width = '0%'
        nav.style.position = 'absolute'
        body.style.overflow = 'auto'
        spanText.style.position = 'initial'
    }
    