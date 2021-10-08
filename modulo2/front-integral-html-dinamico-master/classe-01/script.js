// Nome (name) um texto
// Região (region) um texto
// Capital (capital) um texto
// População (population) um texto
// Bandeira (flag) uma imagem


const root = document.querySelector('body');


fetch('https://restcountries.eu/rest/v2/all').then(resposta => {
  const promiseBody = resposta.json()

  promiseBody.then(body => {

    const div = document.createElement('div')
    div.classList.add('pais')

    body.forEach(pais => {
      const divDoPais = document.createElement('div')
      divDoPais.classList.add('paisUnitario')

      const img = document.createElement('img')
      img.src = pais.flag

      const nome = document.createElement('h1')
      nome.textContent = pais.name

      const capital = document.createElement('span')
      capital.textContent = pais.capital

      const regiao = document.createElement('span')
      regiao.textContent = pais.region

      const populacao = document.createElement('p')
      populacao.textContent = pais.population




      divDoPais.append(img, nome, capital, regiao, populacao)
      div.append(divDoPais)
      root.append(div)
    })
  })
})