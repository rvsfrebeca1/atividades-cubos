const numeros = [8, 11, 4, 1,];

let numeroMaior = 0;

let diferenca = 0;

for (let i = 0; i <= numeros.length; i++){

  if(numeros[i] > numeroMaior){

    numeroMaior = numeros[i]
  }

}

let numeroMenor = numeroMaior

for (let i = 0; i <= numeros.length; i++){

  if(numeros[i] < numeroMenor){

    numeroMenor = numeros[i]
  }

}
console.log(numeroMaior - numeroMenor)




