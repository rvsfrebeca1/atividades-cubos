const conexao = require('../conexao');
const validacao = require('./validacoes')

const listarLivros = async (req, res) => {
    try {
        const query = `
            SELECT l.id, a.nome as nome_autor, l.nome, l.genero, l.editora, l.data_publicacao FROM livros l 
            LEFT JOIN autores a ON l.autor_id = a.id
        `;
        const { rows: livros } = await conexao.query(query);
        return res.status(200).json(livros);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const obterLivro = async (req, res) => {
    const { id } = req.params;
    await validacao.itemInexistente("livros", id, res)
    try {
        const { rows } = await conexao.query('SELECT * FROM livros WHERE id = $1', [id]);
        return res.status(200).json(rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const cadastrarLivro = async (req, res) => {
    const { autor_id, nome, genero, editora, data_publicacao } = req.body;
    validacao.campoObrigatorio(autor_id, "autor_id", res)
    validacao.campoObrigatorio(nome, "nome", res)
    validacao.campoObrigatorio(genero, "genero", res)

    try {
        validacao.itemInexistente("autores", autor_id, res)
        const query = `INSERT INTO livros (autor_id, nome, genero, editora, data_publicacao) 
        VALUES ($1, $2, $3, $4, $5)`;

        await conexao.query(query, [autor_id, nome, genero, editora, data_publicacao]);

        return res.json('Livro cadastrado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const atualizarLivro = async (req, res) => {
    const { id } = req.params;
    const { autor_id, nome, genero, editora, data_publicacao } = req.body;
    await validacao.itemInexistente("livros", id, res)
    await validacao.itemInexistente("livros", autor_id, res)
    await validacao.campoObrigatorio(autor_id, "autor_id", res)
    await validacao.campoObrigatorio(genero, "genero", res)

    try {
        const query = `UPDATE livros SET 
        autor_id = $1,
        nome = $2,
        genero = $3,
        editora = $4,
        data_publicacao = $5
        WHERE id = $6`;

        await conexao.query(query, [autor_id, nome, genero, editora, data_publicacao, id]);

        return res.json('O livro foi atualizado com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const excluirLivro = async (req, res) => {
    const { id } = req.params;
    await validacao.itemInexistente("livros", id, res)
    await validacao.verificarSeExisteItemDependente("emprestimos", "livro_id", id, res)
    try {

        const query = 'DELETE FROM livros WHERE id = $1';


        await conexao.query(query, [id]);
        return res.json('O livro foi excluido com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarLivros,
    obterLivro,
    cadastrarLivro,
    atualizarLivro,
    excluirLivro
}