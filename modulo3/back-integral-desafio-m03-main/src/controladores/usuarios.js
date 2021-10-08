const validacao = require('../validacoes')
const bcrypt = require('bcrypt')
const pool = require('../conexao')

const jwt = require('jsonwebtoken')
const chave = require('../secure-jwt')

const cadastrarUsuarios = async (req, res) => {
  const { nome, nome_loja, email, senha } = req.body

  if (email === undefined || !email) return res.status(400).json({ mensagem: "Campo email é obrigatório" })
  if (nome_loja === undefined || !nome_loja) return res.status(400).json({ mensagem: "Campo nome_loja é obrigatório" })
  if (nome === undefined || !nome) return res.status(400).json({ mensagem: "Campo nome é obrigatório" })
  if (senha === undefined || !senha) return res.status(400).json({ mensagem: "Campo senha é obrigatório" })
  const senhaEncrypted = await bcrypt.hash(senha, 10)

  try {

    try {
      const query = `SELECT * FROM usuarios WHERE email = $1`

      const { rowCount } = await pool.query(query, [email])

      if (rowCount !== 0) return res.status(400).json({ mensagem: `ja existe um usuário com esse email` })
    } catch (error) {
      return res.json(error.message)
    }



    const query = 'INSERT INTO usuarios (nome, nome_loja, email, senha) VALUES ($1, $2, $3, $4)'
    await pool.query(query, [nome, nome_loja, email, senhaEncrypted])

    return res.json()

  } catch (error) {
    return res.json(error.message)
  }

}
const logarUsuario = async (req, res) => {
  const { email, senha } = req.body

  if (senha === undefined || !senha) return res.status(400).json({ mensagem: "Campo senha é obrigatório" })
  if (email === undefined || !email) return res.status(400).json({ mensagem: "Campo email é obrigatório" })


  try {
    const query = 'SELECT * FROM usuarios WHERE email = $1'
    const { rowCount, rows } = await pool.query(query, [email])
    if (rowCount === 0) return res.status(400).json({ mensagem: "Email ou senha incorretos" })
    const usuario = rows[0]

    const loginSucess = await bcrypt.compare(senha, usuario.senha)

    if (!loginSucess) return res.status(400).json({ mensagem: "Usuário ou senha incorretos" })

    const { id } = usuario
    const token = jwt.sign({ id: id }, chave)
    return res.json({ token: token })

  } catch (error) {
    return res.json(error.message)
  }


}
const detalharUsuario = async (req, res) => {
  try {
    const query = 'SELECT * FROM usuarios WHERE id = $1'
    const { rows } = await pool.query(query, [req.usuarioLogado])
    const { id, nome, email, nome_loja } = rows[0]
    return res.status(200).json({
      id: id,
      nome: nome,
      email: email,
      nome_loja: nome_loja
    })
  } catch (error) {
    return res.json(error.message)
  }


}
const editarUsuario = async (req, res) => {
  const { nome, email, nome_loja, senha } = req.body
  await validacao.campoObrigatorio(nome, "nome", res)
  await validacao.campoObrigatorio(email, "email", res)
  await validacao.campoObrigatorio(nome_loja, "nome_loja", res)

  if (senha === undefined || !senha) return res.status(400).json({ mensagem: "Campo senha é obrigatório" })

  const senhaEncrypted = await bcrypt.hash(senha, 10)


  try {
    await validacao.verificarConstraintUnique("usuarios", "email", email, res)

    const query = 'UPDATE usuarios SET nome = $1, email = $2, nome_loja = $3, senha = $4 WHERE id = $5'
    await pool.query(query, [nome, email, nome_loja, senhaEncrypted, req.usuarioLogado])

    return res.status(200).json()
  } catch (error) {
    return res.json(error.menssage)
  }
}





module.exports = {
  cadastrarUsuarios,
  logarUsuario,
  detalharUsuario,
  editarUsuario
}