const conexao = require('../conexao')
const validacao = require('./validacoes')


const listarUsuarios = async (req, res) => {
  try {
    const query = 'SELECT * FROM usuarios'
    const { rows } = await conexao.query(query)

    for (let row of rows) {
      const query = `SELECT emprestimos.id, emprestimos.usuario_id, emprestimos.livro_id, emprestimos.status, livros.nome as livro FROM emprestimos JOIN livros ON livros.id = emprestimos.livro_id WHERE usuario_id = $1`

      const { rows: emprestimos } = await conexao.query(query, [row.id]);
      row.emprestimos = emprestimos;
      row.emprestimos.livro = emprestimos.livros

    }

    return res.json(rows)
  } catch (error) {
    return res.json(error.message)
  }
}
const obterUsuario = async (req, res) => {
  const { id } = req.params
  await validacao.itemInexistente("usuarios", id, res)
  try {
    const query = 'SELECT * FROM usuarios WHERE id = $1'
    const { rows } = await conexao.query(query, [id])
    for (let row of rows) {

      const query = `SELECT emprestimos.id, emprestimos.usuario_id, emprestimos.livro_id, emprestimos.status, livros.nome as livro FROM emprestimos JOIN livros ON livros.id = emprestimos.livro_id WHERE usuario_id = $1`

      const { rows: emprestimos } = await conexao.query(query, [row.id]);
      row.emprestimos = emprestimos;
      row.emprestimos.livro = emprestimos.livros

    }

    return res.json(rows[0])
  } catch (error) {
    return res.json(error.message)
  }
}
const cadastrarUsuario = async (req, res) => {
  const { nome, idade, email, telefone, cpf } = req.body

  await validacao.campoUnico("usuarios", email, "email", res)
  await validacao.campoUnico("usuarios", cpf, "cpf", res)
  await validacao.campoObrigatorio(nome, "nome", res)
  await validacao.campoObrigatorio(email, "email", res)
  await validacao.campoObrigatorio(cpf, "cpf", res)

  try {
    const query = 'INSERT INTO usuarios (nome, idade, email, telefone, cpf) VALUES($1, $2, $3, $4, $5)'
    await conexao.query(query, [nome, idade, email, telefone, cpf])

    return res.json('Usuário cadastrado com sucesso')
  } catch (error) {
    return res.json(error.message)
  }

}
const atualizarUsuario = async (req, res) => {
  const { id } = req.params
  const { nome, idade, email, telefone, cpf } = req.body
  await validacao.itemInexistente("usuarios", id, res)
  await validacao.campoObrigatorio(nome, "nome", res)
  await validacao.campoObrigatorio(email, "email", res)
  await validacao.campoObrigatorio(cpf, "cpf", res)


  try {
    const query = 'UPDATE usuarios SET nome = $1, idade = $2, email = $3, telefone = $4, cpf = $5 WHERE id = $6'
    await conexao.query(query, [nome, idade, email, telefone, cpf, id])


    return res.json('Usuario foi atualizado com sucesso.');
  } catch (error) {

    return res.json(error.message)
  }
}
const excluirUsuario = async (req, res) => {
  const { id } = req.params
  await validacao.itemInexistente("usuarios", id, res)
  await validacao.verificarSeExisteItemDependente("emprestimos", "usuario_id", id, res)

  const query = 'DELETE FROM usuarios WHERE id = $1'
  await conexao.query(query, [id])

  return res.json("Usuário deletado com sucesso")
}

module.exports = {
  listarUsuarios,
  obterUsuario,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario
}