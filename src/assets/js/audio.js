const btnPlay = document.querySelector(".btn-play");
const pause = document.querySelector(".btn-pause");
const volUp = document.querySelector(".btn-volup");
const volDown = document.querySelector(".btn-voldown");
const btns = document.querySelector(".btns-audio");


btns.onclick = function() {

    btnPlay.classList.toggle('d-block');
    btnPlay.style.transition

    pause.classList.toggle('d-block');


    volUp.classList.toggle('d-block');


    volDown.classList.toggle('d-block');

}   