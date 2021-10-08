const formulario = document.querySelector('form')
const inputSenha = document.querySelector('.senha input')
const inputRepitaSenha = document.querySelector('.repita-senha input')


formulario.addEventListener('submit', function (event) {
  if (inputSenha.value !== inputRepitaSenha.value) {
    event.preventDefault()
  }
})