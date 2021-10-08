const express = require('express')
const app = express()
const fs = require('fs/promises')
const instanceAxios = require('./servicos');
app.use(express.json())

app.get('/empresas/:dominioDaEmpresa', async (req, res) => {
  const response = await instanceAxios.get(`/?domain=${req.params.dominioDaEmpresa}`)

  // Guardar apenas os resultados cujo nome da empresa (propriedade name do objeto retornado) venha preenchido corretamente (não venha com null ou undefined).
  // Portanto, guardaremos no array apenas os objetos das empresas que sejam retornadas com o nome preenchido.
  const empresa = []
  try {
    if (response.data.name) {
      empresa.push(response.data)
      await fs.writeFile('empresas.json', JSON.stringify(empresa))
      res.json(response.data)
      return
    }

  } catch (err) {

    console.log(err)
  }
})

app.listen(8000)