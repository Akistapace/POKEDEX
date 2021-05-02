

function Scroll() {
  let target = document.querySelector('.cards-group')
  let coverWhite = document.querySelector('.cover-white')
  let stripes = document.querySelectorAll('.stripes')
 
  if(target.getBoundingClientRect().top < window.innerHeight === true) {
        coverWhite.querySelector('img').classList.add('spin')
        setTimeout(() => {
            stripes.forEach(el => {
                el.style.width = 0
            });
        }, 1400);

        setTimeout(() => {
            coverWhite.classList.add('up')
        }, 1500);

      setTimeout(() => {
        document.body.style.overflowX = 'hidden'
        coverWhite.classList.add('left')
      }, 2200);

    //  Remove o listner de scrrol para que não fique inserindo as classes após passar pelo elemento target
        window.removeEventListener('scroll', Scroll)
  }

}
window.addEventListener('scroll', Scroll)


    let seeMoreBtn = document.querySelector('#seeMoreBtn')
    let boxBlue = document.querySelector('.cards-group')

    seeMoreBtn.addEventListener('click', ()=> {
        if (seeMoreBtn.innerHTML == 'Ver Mais') {
          seeMoreBtn.innerHTML = 'Ver Menos'
          boxBlue.style.overflow = 'initial'
          boxBlue.style.maxHeight = '100%'
        } else {
          seeMoreBtn.innerHTML = 'Ver Mais'
          boxBlue.style.overflow = 'hidden'
          boxBlue.style.maxHeight = '300px'

        // Ajusta compartamento de scroll após clique em ver Menos
        // Fazendo com que scrole até a seção de insignias novamente
          document.querySelector('.cards').scrollIntoView(false);
        }
    })