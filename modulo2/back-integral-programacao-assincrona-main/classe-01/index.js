const express = require('express')
const app = express()

const axios = require('axios')

app.use(express.json())




app.get('/', async (req, res) => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
  if (req.query.inicio && req.query.limite) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${req.query.incio}&limit=${req.query.limite}`)

    res.json(response.data.results)
  } else {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    res.json(response.data.results)
  }

  // res.json(response.data)
})

const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
app.get("/:idOuNome", async (req, res) => {

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idOuNome}/`)


  res.json({
    id: response.data.id,
    name: response.data.name,
    height: response.data.height,
    weight: response.data.weight,
    base_experience: response.data.base_experience,
    forms: response.data.forms,
    abilities: response.data.abilities,
    species: response.data.species
  })


})

app.listen(8000)