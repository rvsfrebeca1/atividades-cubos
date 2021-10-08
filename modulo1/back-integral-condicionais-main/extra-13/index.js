//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {

  console.log("O valor a ser pago é: " + (valorDoProduto * 0.05).toFixed(2))


} else if (tipoDePagamento === "cheque") {

  console.log("O valor a ser pago é: " + (valorDoProduto * 0.3).toFixed(2))

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  console.log("O valor a ser pago é: " + (valorDoProduto * 0.10).toFixed(2))
}

