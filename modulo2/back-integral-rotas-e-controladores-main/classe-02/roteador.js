const express = require('express')
const { consultarAlunos, consultarAlunosPorId, adicionarAluno, deletarAluno } = require('./controladores/constrolador')
const validarSenha = require('./intermediarios')
const roteador = express()
roteador.use(express.json())


roteador.use(validarSenha)

// GET <- OK
// POST <- OK
// DELETE <- OK


roteador.get("/", consultarAlunos)
roteador.get("/:idDoAluno", consultarAlunosPorId)
roteador.post("/", adicionarAluno)
roteador.delete("/:idDoAluno", deletarAluno)
module.exports = roteador