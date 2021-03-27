const btnContact = document.getElementById("btn-contact");
const closeContact = document.getElementById("close");
const Modalcontact = document.querySelector(".fade");

closeContact.onclick =  ()=> {
    Modalcontact.style.display   = 'none'
}

btnContact.onclick   =  ()=> {
    Modalcontact.style.display   = 'flex'
}

window.onclick = function(event) {
  if (event.target == Modalcontact) {
    Modalcontact.style.display = 'none';
  }
}