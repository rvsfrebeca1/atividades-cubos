const express = require('express');
const roteador = require('./roteador')



const app = express()


app.use(express.json())
app.use(roteador)


// /GET imoveis <- OK
// /GET imoveis/:idDoImovel <- OK

// Roteadores <- OK
// Controladores <- OK
// Camada de dados <- OK

app.listen(8000)