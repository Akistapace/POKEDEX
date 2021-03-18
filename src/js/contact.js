const btnContact = document.getElementById("btn-contact");
const close = document.getElementById("close");
const contact = document.querySelector(".contact");


btnContact.onclick = function () {
    contact.style.display='block';
}
close.onclick =function () {
    contact.style.display='none';
}
contact.on = function () {
    contact.style.display='none';
}