const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'Divina Comédia'];
const nomeDoLivro = "Divina Comédia";

if (livros.includes(nomeDoLivro)) {
  console.log(livros.indexOf(nomeDoLivro))
} else {
  console.log(`Este livro não existe em nossa estante`)
}
