
const express = require('express')
const app = express()



const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0;

app.get("/", (req, res) => {


  if (contador === jogadores.length) {
    contador = 0
    res.send(jogadores[contador])
  } else {
    res.send(jogadores[contador])
  }

  contador++

})
const jogadoresParaRemoverCopy = jogadores.slice(0)
app.get("/remover", (req, res) => {



  if (req.query.indice > jogadoresParaRemoverCopy.length - 1 || !req.query.indice) {
    res.send(`Não existe jogador no índice informado (${!req.query.indice ? "nenhum" : req.query.indice}) para ser removido.`)
  } else {
    jogadoresParaRemoverCopy.splice(req.query.indice, 1)

    res.send(jogadoresParaRemoverCopy)
  }

})



app.get("/adicionar", (req, res) => {
  // const jogadoresParaAdicionarCopy = jogadores.slice(0)
  const nome = req.query.nome
  const indice = req.query.indice
  if (indice) {
    if (indice > jogadoresParaRemoverCopy.length - 1 || indice < 0) {
      res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
    } else {
      jogadoresParaRemoverCopy.splice(indice, 0, nome)
      res.send(jogadoresParaRemoverCopy)
    }

  } else {
    jogadoresParaRemoverCopy.push(nome)
    res.send(jogadoresParaRemoverCopy)
  }
})


app.listen(8000)
