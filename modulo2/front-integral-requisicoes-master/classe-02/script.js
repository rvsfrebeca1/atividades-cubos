const inputMoeda = document.querySelector('select')
const valor = document.querySelector('span')



inputMoeda.addEventListener('change', () => {
  if (!inputMoeda.value) {
    valor.innerText = ``
    return
  }
  const promiseResponse = fetch(`https://www.mercadobitcoin.net/api/${inputMoeda.value}/ticker/`)

  promiseResponse.then((response) => {
    const promiseBody = response.json()

    promiseBody.then((body) => {
      const moeda = Number(body.ticker.high).toFixed(2)
      valor.innerText = `R$ ${moeda}`
    })
  })
})