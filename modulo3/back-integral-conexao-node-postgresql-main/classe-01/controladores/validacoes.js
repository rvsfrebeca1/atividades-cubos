const conexao = require('../conexao')
function campoObrigatorio(campo, nome_do_campo, res) {
  if (!campo) return res.json(`O campo ${nome_do_campo} é obrigatório`).status(400)
}

async function campoUnico(tabela, campo, nome_do_campo, res) {

  try {
    const { rowCount } = await conexao.query(`SELECT * FROM ${tabela} WHERE ${nome_do_campo} = $1`, [campo])

    if (rowCount > 0) {
      return res.json(`Ja existe uma conta com esse ${nome_do_campo}`).status(400)

    }

  } catch (error) {
    return res.json(error.message)
  }
}

async function itemInexistente(tabela, id, res) {
  try {
    const { rowCount } = await conexao.query(`select * from ${tabela} where id = $1`, [id]);

    if (rowCount === 0) {
      return res.status(404).json('Item não encontrado');
    }
  } catch (error) {
    return res.json(error.message)
  }
}


async function verificarSeExisteItemDependente(tabela, item_dependente, id, res) {
  const { rowCount } = await conexao.query(`SELECT * FROM ${tabela} WHERE ${item_dependente} = $1`, [id])

  if (rowCount !== 0) return res.json("Não é possível excluir um item que dependa de outros itens").status(400)
}





module.exports = {
  campoObrigatorio,
  campoUnico,
  itemInexistente,
  verificarSeExisteItemDependente
}