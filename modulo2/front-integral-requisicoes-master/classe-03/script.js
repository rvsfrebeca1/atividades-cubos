const inputPokemon = document.querySelector('#pokemon')
const nomePokemon = document.querySelector('h2')
const fotoPokemon = document.querySelector('img')
const nomeHabilidades = document.querySelector('.habilidades span')

inputPokemon.addEventListener('change', () => {

  const promiseResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.value}/`)

  promiseResponse.then((response) => {
    if (!response.ok) {
      return
    }
    const promiseBody = response.json()

    promiseBody.then((body) => {
      nomePokemon.innerText = body.name
      fotoPokemon.src = body.sprites.front_default
      const hab = [];

      for (habilidade of body.abilities) {
        hab.push(` ${habilidade.ability.name}`)
      }
      nomeHabilidades.innerText = hab
    })
  })
})