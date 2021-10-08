const express = require('express');
const app = express();
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

// /GET consultar/ verificar se existe convidados <= OK
// /POST adicionar convidados  <= OK


app.get("/convidados", (req, res) => {
  if (req.query.nome) {
    //verificar se existe
    if (convidados.includes(req.query.nome)) {
      req.body.mensagem = {
        mensagem: "Convidado presente."
      }
      res.json(req.body.mensagem)
    } else {
      req.body.mensagem = {
        mensagem: "O convidado buscado não está presente na lista."
      }
      res.json(req.body.mensagem)

    }
  } else {
    res.json(convidados)
  }
  console.log(req.query.nome)
})


app.post("/adicionar", (req, res) => {
  if (convidados.includes(req.body.nome)) {
    req.body.mensagem = {
      mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
    }
    res.json(req.body.mensagem)
  } else {
    convidados.push(req.body.nome)
    req.body.mensagem = {
      mensagem: "Convidado adicionado"
    }
    res.send(req.body.mensagem)

  }

  console.log((req.body.nome))
  res.send('ok')

})

app.delete("/:nomeDelete", (req, res) => {
  if (convidados.includes(req.params.nomeDelete)) {
    const indice = convidados.indexOf(req.params.nomeDelete)
    convidados.splice(indice, 1)
    req.body.mensagem = {
      mensagem: "Convidado removido."
    }

    res.json(req.body.mensagem)
  } else {
    req.body.mensagem = {
      mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
    }
    res.json(req.body.mensagem)
  }
  console.log(req.params.nomeDelete)
  res.send('ok')
})




app.listen(8000)