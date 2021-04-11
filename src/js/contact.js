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
        modal.style.width = 'calc(90% - 30px)';
        console.log("midia menor que 499px overflow auto")
    } else {
        modal.style.width = 'calc(100% - 30px)'
        console.log("midia maior que 499px overflow auto")
    }
}

btnOpenContact.onclick =  ()=> { 
    if (containerContact.style.width == '100%') {
        closeModal()
    } else {
        containerContact.style.display = 'block'
        modal.style.padding = '15px'
        modal.style.overflowX = 'initial';
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