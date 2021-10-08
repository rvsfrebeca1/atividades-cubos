const pool = require('../conexao')
const validacao = require('../validacoes')



const listarProdutos = async (req, res) => {


  try {
    const query = 'SELECT * FROM produtos WHERE usuario_id = $1'
    const { rows } = await pool.query(query, [req.usuarioLogado])
    return res.json(rows)
  } catch (error) {
    return res.json(error.message)
  }
}
const detalharProduto = async (req, res) => {
  try {
    const query = 'SELECT produtos.id, usuarios.id as Usuario_id, produtos.nome, produtos.quantidade, produtos.categoria, produtos.preco, produtos.descricao, produtos.imagem FROM produtos JOIN usuarios ON produtos.usuario_id = $1 WHERE produtos.id = $2'
    const { rows, rowCount } = await pool.query(query, [req.usuarioLogado, req.params.id])

    if (rowCount === 0) return res.status(404).json({ mensagem: "Produto não encontrado" })
    return res.json(rows[0])
  } catch (error) {
    return res.json(error.message)
  }
}
const cadastrarProduto = async (req, res) => {
  const { nome, quantidade, categoria, preco, descricao, imagem } = req.body
  if (quantidade < 0) return res.status(400).json({ mensagem: "A quantidade de um produto tem que ser maior do que zero" })


  if (nome === undefined || !nome) return res.status(400).json({ mensagem: "Campo nome é obrigatório" })

  if (quantidade === undefined || !quantidade) return res.status(400).json({ mensagem: "Campo quantidade é obrigatório" })

  if (preco === undefined || !preco) return res.status(400).json({ mensagem: "Campo preco é obrigatório" })

  if (descricao === undefined || !descricao) return res.status(400).json({ mensagem: "Campo descricao é obrigatório" })


  try {
    const query = 'INSERT INTO produtos (nome, quantidade, categoria, preco, descricao, imagem, usuario_id) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    await pool.query(query, [nome, quantidade, categoria, preco, descricao, imagem, req.usuarioLogado])
    return res.status(200).json()
  } catch (error) {
    return res.json(error.message)
  }
}
const editarProduto = async (req, res) => {
  const { nome, quantidade, categoria, preco, descricao, imagem } = req.body
  if (quantidade < 0) return res.status(400).json({ mensagem: "A quantidade precisa ser maior do que zero" })
  if (!nome || nome === undefined) return res.status(400).json({ mensagem: "O campo nome é obrigatório" })
  if (!quantidade || quantidade === undefined) return res.status(400).json({ mensagem: "O campo quantidade é obrigatório" })
  if (!preco || preco === undefined) return res.status(400).json({ mensagem: "O campo preco é obrigatório" })
  if (!descricao || descricao === undefined) return res.status(400).json({ mensagem: "O campo descricao é obrigatório" })

  try {
    const query = 'SELECT * FROM produtos WHERE usuario_id = $1 AND produtos.id = $2;'
    const { rowCount } = await pool.query(query, [req.usuarioLogado, req.params.id])

    if (rowCount === 0) return res.status(404).json({ mensagem: "Produto não encontrado para esse usuário" })


    const queryInsert = 'UPDATE produtos SET nome = $1, quantidade =  $2, categoria = $3, preco = $4, descricao = $5, imagem = $6 WHERE usuario_id = $7 AND produtos.id = $8'
    await pool.query(queryInsert, [nome, quantidade, categoria, preco, descricao, imagem, req.usuarioLogado, req.params.id])
    return res.json()
  } catch (error) {
    return res.json(error.message)
  }

}
const deletarProduto = async (req, res) => {

  try {

    const query = 'SELECT * FROM produtos WHERE usuario_id = $1 AND produtos.id = $2;'
    const { rowCount } = await pool.query(query, [req.usuarioLogado, req.params.id])

    if (rowCount === 0) return res.status(404).json({ mensagem: "Produto não encontrado para esse usuário" })




    const queryDelete = 'DELETE FROM produtos WHERE produtos.id = $1 AND usuario_id = $2'
    await pool.query(queryDelete, [req.params.id, req.usuarioLogado])
    return res.json()
  } catch (error) {
    return res.json(error.message)
  }

}




module.exports = {
  listarProdutos,
  detalharProduto,
  cadastrarProduto,
  editarProduto,
  deletarProduto
}