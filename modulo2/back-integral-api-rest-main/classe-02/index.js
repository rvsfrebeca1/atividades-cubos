const express = require('express');
const app = express();
const livros = require('./dados/livros')
const roteador = require('./roteador')


app.use(roteador)





// GET consultar /livros <- OK
// GET consultar livros por ID /livros/:idDoLivro <- OK
// POST adicionar /livros <- OK
// PUT subistituir /livros <- OK
// PATCH alterar /livrosc <- OK
// DELETE deletar /livros









app.listen(8000)