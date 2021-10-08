const express = require('express')
const roteador = express()


function validarSenha(req, res, next) {
  if (!req.query.senha) {
    res.json({ mensagem: "Insira a senha para completar a requisição" })
    res.status(401)
    return
  }
  if (req.query.senha != "cubos123") {
    res.json({ mensagem: "Insira a senha correta" })
    res.status(401)
    return
  }

  next()
}

module.exports = validarSenha