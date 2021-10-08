const formulario = document.querySelector('form');
const musica = document.querySelector('input');
const selecionarGeneroMusical = document.querySelector('select')
const generoMusical = document.querySelectorAll('option')

selecionarGeneroMusical.addEventListener('change', function () {
  if (selecionarGeneroMusical.value === "Pagode") {
    musica.value = 'Cheia de Manias'
  } else if (selecionarGeneroMusical.value === "Rock") {
    musica.value = 'Smells like teen spirit'
  } else if (selecionarGeneroMusical.value === "Funk") {
    musica.value = 'Show das poderosas'
  }
})
formulario.addEventListener('submit', function (event) {



  if (!musica.value) {
    event.preventDefault()
  }



})