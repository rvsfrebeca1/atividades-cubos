const express = require('express');
const app = express();
const fs = require('fs/promises')
const axios = require('axios');
const { Json, json } = require('body-parser');
const { Console } = require('console');
const { isBuffer } = require('util');


app.get("/endereco/:cep", async (req, res) =>{

    let cep = req.params.cep.split('')
    cep.splice(-3, 0, '-')
    cep = cep.join('')

    const enderecos = JSON.parse(await fs.readFile('enderecos.json'));
    let enderecoNovo;
    

    if(enderecos){
        let enderecoEncontrado = enderecos.find(end => end.cep === cep)
        if(enderecoEncontrado){

            res.json(enderecoEncontrado)
            return
        }

        enderecoEncontrado = (await axios.get(`https://viacep.com.br/ws/${req.params.cep}/json/`)).data

        if(enderecoEncontrado){

            enderecos.push(enderecoEncontrado)

            fs.writeFile('enderecos.json', JSON.stringify(enderecos))

            res.json(enderecoEncontrado)
            return

        }
    }
})

app.listen(8000)