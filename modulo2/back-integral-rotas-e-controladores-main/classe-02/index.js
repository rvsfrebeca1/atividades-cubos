const express = require('express')
const validarSenha = require('./intermediarios')
const roteador = require('./roteador')
const app = express()

app.use(roteador)

// Deverá estar disponível no endereço http://localhost:8000 <- OK
// Deverá seguir o padrão REST, contemplando os métodos (verbos) HTTP GET, POST e DELETE. <- OK
// Os códigos de status (status codes) a serem retornados deverão seguir a especificação de cada método (mais abaixo). <- OK
// Deverá possuir apenas um recurso alunos que deverá ser acessado através do endereço http://localhost:8000/alunos <- OK
// Deverá ser organizado em diferentes camadas (dados, controladores, roteador, intermediarios). A organização será detalhada mais abaixo. <- OK
// Deverá ser protegida por uma autenticação simples através de senha passada por parâmetro do tipo query chamado senha. As regras da autenticação serão explicadas mais abaixo. <- OK
// Todos os métodos do recurso único alunos deverão possuir as validações necessárias que serão detalhadas para cada método mais abaixo. <- OK
// Na camada de dados deverá existir uma coleção (array) de alunos, onde cada item é um objeto representando um aluno. A coleção deverá ser iniciada vazia. <- OK
// Cada objeto alunos deverá possuir 5 propriedades: <- OK
// id (número) 
// nome (string)
// sobrenome (string)
// idade (número)
// curso (string)

roteador.use(express.json())

roteador.use(validarSenha)



app.listen(8000)
