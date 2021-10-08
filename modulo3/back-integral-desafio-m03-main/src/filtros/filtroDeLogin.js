const jwt = require('jsonwebtoken')
const chave = require('../secure-jwt')
const pool = require('../conexao')

const filtroDeLogin = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) return res.status(401).json({ mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado." })


  try {

    const token = authorization.replace("Bearer", "").trim()
    const usuario = jwt.verify(token, chave)
    req.usuarioLogado = usuario.id


    const query = 'SELECT * FROM usuarios WHERE id = $1'
    const { rowCount } = await pool.query(query, [usuario.id])


    if (rowCount === 0) return res.status(400).json({ mensagem: "Usuário não esta logado" })
  } catch (error) {

    return res.status(400).json({ mensagem: "Token inválido" })
  }

  //   Validações do token
  // REQUISITOS OBRIGATÓRIOS
  // Validar se o token foi enviado no header da requisição (Bearer Token)
  // Verificar se o token é válido
  // Consultar usuário no banco de dados pelo id contido no token informado

  next()
}


module.exports = { filtroDeLogin }