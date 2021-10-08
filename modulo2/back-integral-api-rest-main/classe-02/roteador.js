const express = require('express');
const roteador = express();
roteador.use(express.json())

const { consultarLivro, consultarLivroPorId, adicionarLivro, substituirLivro, alterarLivro, deletarLivro } = require('./controladores/controlador')


roteador.get('/livros', consultarLivro)
roteador.get('/livros/:idDoLivro', consultarLivroPorId)
roteador.post("/livros", adicionarLivro)
roteador.put("/livros/:idDoLivro", substituirLivro)
roteador.patch("/livros/:idDoLivro", alterarLivro)
roteador.delete("/livros/:idDoLivro", deletarLivro)


module.exports = roteador