const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComLetra = [];
for(nome of nomes ){
  if (nome[0] === "a" || nome[0] === "A"){

    nomesComLetra.push(nome)

  }


}
 console.log(nomesComLetra)