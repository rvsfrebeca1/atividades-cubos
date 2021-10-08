const conexao = require('../conexao');
const validacao = require('./validacoes');

const listarAutores = async (req, res) => {
    try {
        const { rows: autores } = await conexao.query('SELECT * FROM autores');

        for (const autor of autores) {
            const { rows: livros } = await conexao.query('SELECT * FROM livros WHERE autor_id = $1', [autor.id]);
            autor.livros = livros;
        }

        return res.status(200).json(autores);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const obterAutor = async (req, res) => {
    const { id } = req.params;
    await validacao.itemInexistente("autores", id, res)
    try {
        const autor = await conexao.query('SELECT * FROM autores WHERE id = $1', [id]);

        return res.status(200).json(autor.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;

    await validacao.campoObrigatorio(nome, "nome", res)
    try {
        const query = 'INSERT INTO autores (nome, idade) VALUES ($1, $2)';
        await conexao.query(query, [nome, idade]);
        return res.json('Autor cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const atualizarAutor = async (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    try {
        await validacao.itemInexistente("autores", id, res)
        await validacao.campoObrigatorio(nome, "nome", res)

        const query = 'UPDATE autores SET nome = $1, idade = $2 WHERE id = $3';
        await conexao.query(query, [nome, idade, id]);

        return res.json('Autor foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const excluirAutor = async (req, res) => {
    const { id } = req.params;

    await validacao.itemInexistente("autores", id, res)
    try {

        await validacao.verificarSeExisteItemDependente("livros", "autor_id", id, res)


        const query = 'delete from autores where id = $1';
        await conexao.query(query, [id]);

        return res.json('Autor foi excluido com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarAutores,
    obterAutor,
    cadastrarAutor,
    atualizarAutor,
    excluirAutor
}