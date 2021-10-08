const conexao = require('../conexao')
const validacao = require('./validacoes')


const listarEmprestimos = async (req, res) => {
  try {
    const query = 'SELECT emprestimos.id, usuarios.nome as usuario, usuarios.telefone as telefone, usuarios.email as email, livros.nome as livro, emprestimos.status as status FROM emprestimos JOIN usuarios ON usuarios.id = emprestimos.usuario_id JOIN livros ON livros.id = emprestimos.livro_id'
    const { rows } = await conexao.query(query)

    for (let row of rows) {
      row.id = row.id
      row.usuario = row.usuario
      row.telefone = row.telefone
      row.email = row.email
      row.livro = row.livro
      row.status = row.status

    }

    return res.json(rows)
  } catch (error) {
    return res.json(error.message)
  }
}
const mostrarEmprestimo = async (req, res) => {
  const { id } = req.params
  await validacao.itemInexistente("emprestimos", id, res)
  try {
    const query = 'SELECT emprestimos.id, usuarios.nome as usuario, usuarios.telefone as telefone, usuarios.email as email, livros.nome as livro, emprestimos.status as status FROM emprestimos JOIN usuarios ON usuarios.id = emprestimos.usuario_id JOIN livros ON livros.id = emprestimos.livro_id'
    const { rows } = await conexao.query(query)

    return res.json(rows[0])
  } catch (error) {
    return res.json(error.message)
  }
}
const fazerEmprestimo = async (req, res) => {
  let { usuario_id, livro_id, status } = req.body
  await validacao.campoObrigatorio(usuario_id, "usuario_id", res)
  await validacao.campoObrigatorio(livro_id, "livro_id", res)
  if (!status) status = "pendente"
  try {
    await validacao.itemInexistente("usuarios", usuario_id, res)
    await validacao.itemInexistente("livros", livro_id, res)
    const query = 'INSERT INTO emprestimos (usuario_id, livro_id, status) VALUES($1, $2, $3)'
    await conexao.query(query, [usuario_id, livro_id, status])

    return res.json('Emprestimo feito com sucesso')
  } catch (error) {
    return res.json(error.message)
  }
}
const atualizarEstadoDoEmprestimo = async (req, res) => {
  const { id } = req.params
  const { status } = req.body

  await validacao.itemInexistente("emprestimos", id, res)
  await validacao.campoObrigatorio(status, "status", res)
  try {
    const query = 'UPDATE emprestimos SET status = $1 WHERE id = $2'
    await conexao.query(query, [status, id])


    return res.json('Estado do emprestimo atualizado com sucesso.');
  } catch (error) {

    return res.json(error.message)
  }
}
const deletarEmprestimo = async (req, res) => {
  const { id } = req.params
  await validacao.itemInexistente("emprestimos", id, res)

  try {
    const query = 'DELETE FROM emprestimos WHERE id = $1'
    await conexao.query(query, [id])
    return res.json('Emprestimo deletado com sucesso')
  } catch (error) {
    return res.json(error.message)

  }
}


module.exports = {
  listarEmprestimos,
  mostrarEmprestimo,
  fazerEmprestimo,
  atualizarEstadoDoEmprestimo,
  deletarEmprestimo
}