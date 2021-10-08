const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor

    this.historicos.push({
      tipo: "Depósito",
      valor: valor / 100
    })

    console.log(`Deposito de R$${valor / 100} realizado para o cliente ${this.nome}`)
  },

  sacar: function (valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente para o saque de ${this.nome}`)

      return

    } else {

      this.saldo -= valor
      this.historicos.push({
        tipo: "Saque",
        valor: valor / 100
      })

      console.log(`Saque de R$${valor / 100} realizado para a conta da cliente ${this.nome}`)

    }



  },
  extrato: function () {

    console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo}`)



    for (movimentacao of this.historicos) {
      console.log(`${movimentacao.tipo} de ${movimentacao.valor}`)
    }


  }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();