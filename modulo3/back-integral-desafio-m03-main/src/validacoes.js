const pool = require('./conexao')


const campoObrigatorio = async (campo, nome_do_campo, res) => {
  if (!campo) return res.status(400).json({ mensagem: `O campo ${nome_do_campo} é obrigatório` })
}


const verificarConstraintUnique = async (tabela, campo, identificador, res) => {
  try {
    const query = `SELECT * FROM ${tabela} WHERE ${campo} = $1`

    const { rowCount } = await pool.query(query, [identificador])

    if (rowCount !== 0) return res.status(400).json({ mensagem: `ja existe um usuário com esse ${campo}` })
  } catch (error) {
    return res.json(error.message)
  }
}

module.exports = {
  campoObrigatorio,
  verificarConstraintUnique
}