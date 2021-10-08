const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const pessoaTransferida = []

let limite = 5


for (let i = 0; i < filaDeFora.length; i++){

  if(filaDeDentro.length <= 5 && filaDeFora.length != 0){
    
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()
    



  }

  
}
console.log(filaDeDentro)
console.log(filaDeFora)