const livros = require('../dados/livros')

let proxID = livros.length + 1
function consultarLivro(req, res) {
  res.json(livros)
}


function consultarLivroPorId(req, res) {

  const livroEncontrado = livros.find(x => {
    return x.id === Number(req.params.idDoLivro)
  })


  if (Number(req.params.idDoLivro) < 1) {
    res.json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido."
    })
    return
  }

  console.log(typeof Number(req.params.idDoLivro))

  if (!livroEncontrado) {
    res.json({
      mensagem: "Não existe livro para o ID informado."
    })
    return
  }

  res.json(livroEncontrado)
}


function adicionarLivro(req, res) {
  let livroAdc = {
    id: proxID,
    titulo: req.body.titulo,
    autor: req.body.autor,
    ano: req.body.ano,
    numPaginas: req.body.numPaginas

  }
  livros.push(livroAdc)

  res.json(livroAdc)

  proxID++
}



function substituirLivro(req, res) {
  const livroEncontrado = livros.find(x => {
    return x.id === Number(req.params.idDoLivro)
  })

  let indice = livros.indexOf(livroEncontrado)

  if (!livroEncontrado) {
    res.json({
      mensagem: "Não existe livro a ser substituído para o ID informado."
    })
    return
  }

  if (Number(req.params.idDoLivro) === livroEncontrado.id) {
    livros.splice(indice, 1, {

      id: livroEncontrado.id,
      titulo: req.body.titulo,
      autor: req.body.autor,
      ano: req.body.ano,
      numPaginas: req.body.numPaginas

    })

    res.json({
      mensagem: "Livro substituido"
    })
    return
  }
}

function alterarLivro(req, res) {
  const livroEncontrado = livros.find(x => {
    return x.id === Number(req.params.idDoLivro)
  })

  let indice = livros.indexOf(livroEncontrado)

  if (!livroEncontrado) {
    res.json({
      mensagem: "Não existe livro a ser substituído para o ID informado."
    })
    return
  }


  if (req.body.titulo) {
    livroEncontrado.titulo = req.body.titulo
    res.json({ mensagem: "Livro alterado." })
  }
  if (req.body.autor) {
    livroEncontrado.autor = req.body.autor
    res.json({ mensagem: "Livro alterado." })
  }
  if (req.body.ano) {
    livroEncontrado.ano = req.body.ano
    res.json({ mensagem: "Livro alterado." })
  }
  if (req.body.numPaginas) {
    livroEncontrado.numPaginas = req.body.numPaginas
    res.json({ mensagem: "Livro alterado." })
  }

  if (req.body.id) {
    res.json({
      mensagem: "Não é possível alterar o ID do livro"
    })
  }
}

function deletarLivro(req, res) {
  const livroEncontrado = livros.find(x => {
    return x.id === Number(req.params.idDoLivro)
  })

  let indice = livros.indexOf(livroEncontrado)

  if (!livroEncontrado) {
    res.json({
      mensagem: "Não existe livro a ser substituído para o ID informado."
    })
    return
  }


  livros.splice(indice, 1)
  res.json({ mensagem: "Livro deletado" })
}
module.exports = {
  consultarLivro,
  consultarLivroPorId,
  adicionarLivro,
  substituirLivro,
  alterarLivro,
  deletarLivro
}