const btnOpenContact = document.querySelector("#openContact")
const containerContact = document.querySelector(".contact .contact-container")
const modal = containerContact.querySelector('.contact-modal')
const closeContact = document.querySelector(".close")

const closeModal = ()=> {
    modal.style.width = '0%'
    modal.style.padding = '0%'
    modal.style.overflowX = 'hidden';
    setTimeout(() => {
        containerContact.style.display = 'none'
    }, 400);
}
const midiaQuerie = ()=> {
    if (window.matchMedia("(max-width: 499px)").matches) { 
        setTimeout(() => {
            modal.style.width = 'calc(90% - 30px)'
            modal.style.padding = '15px'
            modal.style.overflow = 'initial'
        }, 300);
    } else {
        setTimeout(() => {
           modal.style.width = 'calc(100% - 30px)'
           modal.style.padding = '15px'
           modal.style.overflow = 'initial'
        }, 300);
    }
}

btnOpenContact.onclick =  ()=> { 
    if (containerContact.style.width == '100%') {
        closeModal()
    } else {
        containerContact.style.display = 'block'
        midiaQuerie()
    }
}
closeContact.onclick = ()=> {
    closeModal()
}
window.onclick = function(event) {
    if (event.target == containerContact) {
        closeModal()
    }
}