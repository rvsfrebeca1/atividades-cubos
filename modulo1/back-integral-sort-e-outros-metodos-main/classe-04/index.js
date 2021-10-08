const palavras = ['livro', 'canet', 'sol', 'carro', 'orelh'];

let existePalavra = palavras.some((x) => x.length > 5)

if (existePalavra) {
  console.log("existe palavra inválida")
} else {
  console.log("array validado")
}