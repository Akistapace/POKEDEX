    const btnOpen = document.querySelector("#btnOpen")
    const sideNav = document.querySelector("#CoverRed")
    const triangulo = document.querySelector(".triangulo-yellow")
    const nav = document.querySelector(".nav")
    const spanText = document.querySelector(".nav-content #btnOpen span")

    btnOpen.onclick =  ()=> { 
        if (sideNav.style.width == '0%') {
            sideNav.style.width = '100%'
            nav.style.position = 'fixed'
            spanText.innerHTML = 'Abrir'
        } else {
            sideNav.style.width = '0%'
            nav.style.position = 'absolute'
            spanText.innerHTML = ''
        }
    }

    sideNav.onclick =  ()=> {
        sideNav.style.width = '0%'
        nav.style.position = 'absolute'
        spanText.innerHTML = ''
    };
    
    triangulo.onclick =  ()=> {
        sideNav.style.width = '0%'
        nav.style.position = 'absolute'
        spanText.innerHTML = ''
    }
    