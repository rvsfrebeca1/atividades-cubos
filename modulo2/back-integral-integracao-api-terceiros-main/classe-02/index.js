const express = require('express')
const axios = require('axios')
const app = express()
const fs = require('fs/promises')
app.use(express.json())

app.post('/:pais/:ip', async (req, res) => {
  const ip = req.params.ip
  const pais = req.params.pais
  try {
    const { data } = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=58cafbe4558f425d8e8c731e3b26fbe0&ip_address=${ip}`);


    if (req.body.voto === 'undefined' || typeof req.body.voto !== 'boolean') {
      return res.json({ mensagem: 'Voto inválido' })
    }

    if (data.country !== pais) {
      return res.json({ mensagem: 'Pais não identificado' })
    }

    const arrayDoArquivo = JSON.parse(await fs.readFile('votos.json'))

    const objetoNovo = {
      ip: data.ip_address,
      voto: req.body.voto
    }

    arrayDoArquivo.push(objetoNovo)

    fs.writeFile('votos.json', JSON.stringify(arrayDoArquivo, null, 2));
    console.log(arrayDoArquivo)
    return res.json(data)




  } catch (err) {
    console.log('erro')

    return

  }
})

app.listen(8000)