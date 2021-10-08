const express = require('express')
const usuarios = require('./controladores/usuarios')
const produtos = require('./controladores/produtos')
const filtro = require('./filtros/filtroDeLogin')
const rota = express()

//usuarios
rota.post('/usuario', usuarios.cadastrarUsuarios)
rota.post('/login', usuarios.logarUsuario)

rota.use(filtro.filtroDeLogin)
rota.get('/usuario', usuarios.detalharUsuario)
rota.put('/usuario', usuarios.editarUsuario)

//produtos
rota.get('/produtos', produtos.listarProdutos)
rota.get('/produtos/:id', produtos.detalharProduto)
rota.post('/produtos', produtos.cadastrarProduto)
rota.put('/produtos/:id', produtos.editarProduto)
rota.delete('/produtos/:id', produtos.deletarProduto)

module.exports = rota