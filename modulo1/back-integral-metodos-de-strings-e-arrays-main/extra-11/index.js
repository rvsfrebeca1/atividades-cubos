const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function buscarCarro(carros, posicao) {
  let arrayReformado = carros.slice(posicao, posicao + 3)
  console.log(`${arrayReformado[0]} - ${arrayReformado[1]} - ${arrayReformado[2]}`)
}



buscarCarro(nomes, posicao)