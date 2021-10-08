const express = require('express');
const roteador = express();
const { consultarImoveis, consultarImovelPorId } = require('./controler/controladores');



roteador.get("/imoveis", consultarImoveis)
roteador.get("/imoveis/:idDoImovel", consultarImovelPorId)

module.exports = roteador


