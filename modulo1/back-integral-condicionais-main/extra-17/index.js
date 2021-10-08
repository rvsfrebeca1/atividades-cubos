//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

let parcelas = quantidadeDoParcelamento === 1 ? "parcela" : "parcelas"

//valor pago
const valorPago = 100000;

const restante = valorDoProduto - valorPago

if (valorPago != valorDoProduto) {
  console.log(`Faltam ${quantidadeDoParcelamento} ${parcelas} de ${(restante / quantidadeDoParcelamento).toFixed(2)} casa `)

} else {
  console.log("Não falta nenhuma parcela, produto quitado")
}