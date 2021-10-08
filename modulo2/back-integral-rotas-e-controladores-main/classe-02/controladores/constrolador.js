const alunos = require('../dados/alunos')




function consultarAlunos(req, res) {
  res.json(alunos)
}

function consultarAlunosPorId(req, res) {
  const alunoEncontrado = alunos.find(x => x.id === Number(req.params.idDoAluno))
  if (req.params.idDoAluno < 1) {
    res.json({ mensagem: "ID de aluno inválido" })
    res.status(400)
    return
  }

  if (!alunoEncontrado) {
    res.json({ mensagem: "Aluno não encontrado" })
    res.status(404)
    return
  }

  res.json(alunoEncontrado)
}
let proxId = alunos.length + 1

function adicionarAluno(req, res) {
  if (!req.body.nome || typeof req.body.nome != 'string') {
    res.json({ mensagem: "o campo 'nome' é inválido" })
    res.status(400)
    return
  }

  if (!req.body.sobrenome || typeof req.body.sobrenome != 'string') {
    res.json({ mensagem: "o campo 'sobrenome' é inválido" })
    res.status(400)
    return
  }
  if (!req.body.idade || req.body.idade < 18) {
    res.json({ mensagem: "o campo 'idade' é inválido" })
    res.status(400)
    return
  }
  if (!req.body.curso || typeof req.body.curso != 'string') {
    res.json({ mensagem: "o campo 'curso' é inválido" })
    res.status(400)
    return
  }
  if (req.body.id) {
    res.json({ mensagem: "Não é possível selecionar o ID do aluno" })
    res.status(400)
    return
  }


  const alunoNovo = {
    id: proxId,
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    idade: req.body.idade,
    curso: req.body.curso
  }
  alunos.push(alunoNovo)
  res.json({})
  res.status(201)
  proxId++
}

function deletarAluno(req, res) {
  const alunoEncontrado = alunos.find(x => x.id === Number(req.params.idDoAluno))

  if (req.params.idDoAluno < 1) {
    res.json({ mensagem: "O ID do aluno não é válido" })
    res.status(400)
    return
  }


  if (!alunoEncontrado) {
    res.json({ mensagem: "O aluno a ser excluido não foi encontrado" })
    res.status(404)
    return
  }

  const indice = alunos.indexOf(alunoEncontrado)
  alunos.splice(indice, 1)
  res.json(alunoEncontrado)
}

module.exports = {
  consultarAlunos,
  consultarAlunosPorId,
  adicionarAluno,
  deletarAluno
}