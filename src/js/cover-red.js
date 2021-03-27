    const btnOpen = document.querySelector("#btnOpen")
    const sideNav = document.querySelector("#CoverRed")


    window.onload = ()=> {
        sideNav.style.width = '100%'
    }

    btnOpen.onclick =  ()=> { 
        if (sideNav.style.width == '100%') {
            sideNav.style.width = '0%'
        } else {
            sideNav.style.width = '100%'
        }
    }
