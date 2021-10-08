
const inputCep = document.querySelector('#cep')
const inputCidade = document.querySelector('#cidade')
const inputRua = document.querySelector('#rua')
const msgErro = document.querySelector('span')

inputCep.addEventListener('change', () => {
  if (inputCep.value.length != 8) {
    if (inputCep.value == '') {
      msgErro.innerText = ''
    } else {
      msgErro.innerText = 'CEP de tamanho inválido, por favor digite um CEP com 8 dígitos'
      return
    }


  }

  const promiseResposta = fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)

  msgErro.innerText = ''

  promiseResposta.then((response) => {
    const promiseBody = response.json()


    promiseBody.then((body) => {
      if (body.erro) {
        msgErro.innerText = 'CEP inválido ou inexistente'
        return
      } else {
        inputCidade.value = body.localidade
        inputRua.value = body.logradouro
      }

      msgErro.innerText = ''

    })
  })

})