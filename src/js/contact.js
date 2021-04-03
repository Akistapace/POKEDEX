//   const sideNav = document.querySelector("#CoverRed")
const btnOpenContact = document.querySelector("#openContact")
const containerContact = document.querySelector(".contact .contact-container")
const closeContact = document.querySelector(".close")

btnOpenContact.onclick =  ()=> { 
    if (containerContact.style.width == '100%') {
        containerContact.style.width = '0%'
    } else {
        containerContact.style.width = '100%'
    }
}

closeContact.onclick = ()=> {
    containerContact.style.width = '0%'
}