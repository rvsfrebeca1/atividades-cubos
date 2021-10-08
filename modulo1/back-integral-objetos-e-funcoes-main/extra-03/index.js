let totalAPagar = 0;
let totalDeItens = 0;
let maiorValor = 0;
let menorValor = 0;
let desconto = 0;


const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    calcularTotalDeItens: function () {
        for (produto of this.produtos) {

            totalDeItens += produto.qtd

        }
        return totalDeItens
    },

    calcularTotalAPagar: function () {
        for (produto of this.produtos) {

            totalAPagar = totalAPagar + (produto.precoUnit * produto.qtd)

        }
        return totalAPagar
    },
    //Funcionalidade de adicionar produtos ao carrinho
    addProduto: function (produto) {
        let idProduto = -1
        for (item of this.produtos) {
            if (item.id === produto.id) {

                totalDeItens += produto.qtd
                break

            } else {

                this.produtos.push(produto)
                break
            }
        }

    },
    //Adicionando funcionalidade de mostrar resumo do carrinho
    resumoDoCarrinho: function () {

        console.log(`Cliente : ${this.nomeDoCliente}`)
        console.log(`O total a pagar é : R$ ${this.calcularTotalAPagar() / 100},00`)
        console.log(`O total de itens é: ${this.calcularTotalDeItens()} itens`)
    },
    addProduto: function (novoProduto) {
        let indiceProduto = -1

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i] === novoProduto.id) {
                indiceProduto = i
                break
            }
        }

        if (indiceProduto = -1) {
            this.produtos.push(novoProduto)
        } else {
            this.produtos[indiceProduto] += novoProduto.qtd
        }

    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`)
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`item ${i + 1} - ${this.produtos[i].nome} - R$${(this.produtos[i].precoUnit * this.produtos[i].qtd) / 100},00`)
        }

        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$${this.calcularTotalAPagar() / 100},00`)
    },
    calcularDesconto: function () {
        let totalItens = this.calcularTotalDeItens()
        let totalCompra = this.calcularTotalAPagar()
        let descontoPorItem = 0
        let descontoPorTotal = 0

        let menorPreço = this.produtos[0].precoUnit
        if (totalItens > 4) {
            for (produto of this.produtos) {
                if (produto.precoUnit < menorPreço) {
                    menorPreço = produto.precoUnit
                }
            }

            descontoPorItem = menorPreço
        }


        if (totalCompra > 100) {
            descontoPorTotal = totalCompra / 10
        }

        // console.log(descontoPorItem)
        // console.log(descontoPorTotal)

        return descontoPorTotal > descontoPorItem ? descontoPorTotal : descontoPorItem
    }
}





// Existem dois descontos possíveis, não cumulativos.

// O primeiro é um desconto em que, para compras acima de 4 itens, o item mais barato sai de graça.

// O segundo é um desconto de 10% para compras acima de 100 reais.

// Sempre no máximo um deles será aplicado - o que for mais vantajoso para o cliente.

// Para o exemplo da letra B, o desconto deverá ser de R$ 30,00.

// Para o exemplo da letra E, com 8 itens, o desconto deverá ser de R$ 44,00.


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000

}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 5000

}

const novaCamisa = {
    id: 7,
    nome: "Camisa",
    qtd: 1,
    precoUnit: 8000

}
// carrinho.calcularDesconto()
// carrinho.addProduto(novaBermuda);
// carrinho.imprimirDetalhes();




carrinho.addProduto(novoTenis);

// executa calcularDesconto e guarda na variável descontoEmCentavos
descontoEmCentavos = carrinho.calcularDesconto();

// formata valor do desconto em texto
descontoEmReaisTexto = `${descontoEmCentavos / 100}`;
descontoEmReaisTexto = descontoEmReaisTexto.replace(".", ",");
if (descontoEmReaisTexto.indexOf(",") === -1) {
    descontoEmReaisTexto = `R$ ${descontoEmReaisTexto},00`;
}

// imprime o valor do desconto
console.log(`Desconto para o carrinho da letra e): ${descontoEmReaisTexto}`);

