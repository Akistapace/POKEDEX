const btnOpenContact = document.querySelector("#openContact")
const closeContact = document.querySelector('.contact .close')
const modal = document.querySelector('.Sendmail')

btnOpenContact.onclick =  ()=> { 
      modal.style.display = 'initial'
      closeContact.style.display = 'initial'
}
closeContact.onclick = ()=> {
    closeContact.style.display = 'none'
    modal.style.display = 'none'
}

closeContact.addEventListener('touchstart', ()=> {
    closeContact.style.display = 'none'
    modal.style.display = 'none'
})