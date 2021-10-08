

const inputs = document.querySelectorAll('input')


inputs.forEach(input => {

  input.addEventListener('change', function () {

    if (verificarResposta(input.dataset.resposta, input.value)) {

      input.classList.add('acerto')

    } else {
      input.classList.add('erro')

    }
  })

})


function verificarResposta(reposta, respostaCorreta) {
  return reposta === respostaCorreta
}

