    const btnOpen = document.querySelector("#btnOpen")
    const sideNav = document.querySelector("#CoverRed")
    const triangulo = document.querySelector(".triangulo-yellow")
    const nav = document.querySelector(".nav")
    const spanText = document.querySelector(".nav-content #btnOpen span")

    btnOpen.onclick =  ()=> { 
        if (sideNav.style.width == '100%') {
            sideNav.style.width = '0%'
            nav.style.position = 'absolute'
            spanText.style.position = 'initial'
        } else {
            sideNav.style.width = '100%'
            nav.style.position = 'fixed'
            spanText.style.position = 'absolute'
        }
    }

    sideNav.onclick =  ()=> {
        sideNav.style.width = '0%'
        nav.style.position = 'absolute'
        spanText.style.position = 'initial'
    };
    
    triangulo.onclick =  ()=> {
        sideNav.style.width = '0%'
        nav.style.position = 'absolute'
        spanText.style.position = 'initial'
    }
    