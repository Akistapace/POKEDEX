

function Scroll() {
  var x = document. querySelector('.cards-group')

  if(x.getBoundingClientRect().top < window.innerHeight === true) {
      setTimeout(() => {
        x.classList.add('up')
      }, 500);

      setTimeout(() => {
        document.body.style.overflowX = 'hidden'
        x.classList.add('left')
      }, 1000);
    }

}
window.addEventListener('scroll', Scroll)