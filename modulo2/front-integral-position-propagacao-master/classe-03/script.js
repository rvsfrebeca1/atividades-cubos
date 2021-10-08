const imagens = document.querySelectorAll('main img')
const imgModal = document.querySelector('.modal img')
const modal = document.querySelector('.modal')

const html = document.querySelector('html')


imagens.forEach(x => {
  x.addEventListener('click', (event) => {
    imgModal.src = event.target.src
    modal.classList.add('show')
  })
})


modal.addEventListener('click', (event) => {
  modal.classList.remove('show')
  imgModal.src = ''
})