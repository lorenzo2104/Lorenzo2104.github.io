const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')
/* função de abrir e fechar menu*/
for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/*funçao de fechar a janela de menu quando clicar nos itens*/
const links = document.querySelectorAll('nav .title')

for (const element of links) {
  element.addEventListener('click', function() {
    nav.classList.remove('show')  
  })
}

/*---------carousel das testemunhas--------*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});