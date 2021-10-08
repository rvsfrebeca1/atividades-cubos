const hamburguer = document.querySelector('.hamburguer')
const aside = document.querySelector('aside')
const textoAside = document.querySelectorAll('.msg')
const imagens = document.querySelectorAll('.img img')
const imagemDoModal = document.querySelector('.imgdoModal')
const modal = document.querySelector('.modalFoto')
const botaoDeFecharModal = document.querySelector('.fecharModal')
const botaoAnterior = document.querySelector('.anterior')
const botaoProximo = document.querySelector('.proximo')


botaoDeFecharModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

// modal.addEventListener('click', () => {
//   modal.style.display = 'none'
// })


hamburguer.addEventListener('click', () => {
  aside.style.alignItems = 'center'
  textoAside[0].classList.add('selecionado')

  textoAside.forEach(x => {
    x.classList.toggle('mostrar')
    x.classList.contains('mostrar') ? hamburguer.src = './assets/open-menu.svg' : hamburguer.src = './assets/closed-menu.svg'

  })


  aside.style.alignItems = 'flex-start'
  aside.classList.add('aumentar-menu')
})

const imagensArray = []
let currentImage;

imagens.forEach((img, index) => {
  img.addEventListener('click', (event) => {
    currentImage = Number(event.target.id)
    modal.style.display = 'flex'
    imagemDoModal.src = `${event.target.src}`
    imagemDoModal.id = event.target.id




  })

  imagensArray.push(img)

})


botaoProximo.addEventListener('click', (event) => {

  event.stopPropagation();
  const image = imagens[currentImage]
  currentImage++
  updateModalImg(image.src)
  updateModalButtons()


})

botaoAnterior.addEventListener('click', (event) => {

  event.stopPropagation();
  const image = imagens[currentImage]

  currentImage--
  updateModalImg(image.src)
  updateModalButtons()

})
// i = i
// botaoAnterior.addEventListener('click', (event) => {
//   if (i === 0) {
//     imagemDoModal.src = `${imagens[i].src}`
//     botaoAnterior.src = ''
//   } else {
//     imagemDoModal.src = `${imagens[i].src}`
//   }
// })




console.log(imagens)
function updateModalImg(src) {
  imagemDoModal.src = src;
}
function updateModalButtons() {
  botaoProximo.classList.remove('hidden');
  botaoAnterior.classList.remove('hidden');

  if (currentImage === 1) {
    botaoAnterior.classList.add('hidden');
  }

  if (currentImage === 10) {
    botaoProximo.classList.add('hidden');
  }
}



