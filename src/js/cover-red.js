const btnOpen = document.querySelector("#btnOpen")
const sideNav = document.querySelector("#CoverRed")
const triangulo = docueent.querySelector(".triangulo-yellow")
const nav = document.querySelector(".nav")
const spanText = document.querySelector(".nav-content #btnOpen span")

btnOpen.onclick = () => {
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

sideNav.onclick = () => {
    sideNav.style.width = '0%'
    nav.style.position = 'absolute'
    spanText.innerHTML = ''
};

triangulo.onclick = () => {
    sideNav.style.width = '0%'
    nav.style.position = 'absolute'
    spanText.innerHTML = ''
}

(() => {
    const progress__Bar = document.getElementById("myBar");
    let progress__width = 1;
    const timer = setInterval(frame, 20);

    function frame() {
        if (progress__width >= 100) {
            clearInterval(timer);
            progress__Bar.parentElement.remove()
            triangulo.style.cssText = 'dislay: block; opacity: 1;'
        } else {
            progress__width++;
            progress__Bar.style.width = progress__width + '%';
            document.getElementById("label").innerHTML = progress__width * 1 + '%';
        }
    }
})
()