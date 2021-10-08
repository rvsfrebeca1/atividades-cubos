const olhoFechado = document.querySelector('img')
const inputSenha = document.querySelector('#senha')


olhoFechado.addEventListener('click', () => {

  if (inputSenha.type === 'password') {
    olhoFechado.src = 'assets/olho-aberto.svg'
    inputSenha.type = 'text'

  } else {
    olhoFechado.src = 'assets/olho-fechado.svg'
    inputSenha.type = 'password'
  }

  // if (inputSenha.type = 'text') {
  //   olhoFechado.src = 'assets/olho-fechado.svg'
  //   inputSenha.type = 'password'
  // }



})

