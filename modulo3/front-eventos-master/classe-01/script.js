const inputs = document.querySelectorAll('input')

const frutas = document.querySelectorAll('li')

inputs.forEach(input => [
  input.addEventListener('keydown', function (event) {
    if (checarEnter(event.code)) {

      filtrarLista(frutas, event.target.value)

      limparInput(input)

    }


  })
])








function checarEnter(tecla) {
  return tecla === 'Enter' || tecla === 'NumpadEnter'
}



function filtrarLista(lista, filtro) {
  lista.forEach(x => {
    x.classList.remove('esconder')


    if (filtro && x.textContent !== filtro) {
      x.classList.add('esconder')
    }
  })
}



function limparInput(input) {
  input.value = ''
}


