const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];


const temBebibaInvalida = palavras.some(x => x === "vodka" || x === "cerveja")

if (temBebibaInvalida) {
  console.log("revise sua lista, joão. possui bebida com venda proibida!")
} else {
  console.log("tudo certo, vamos as compras!")
}