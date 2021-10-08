const letras = ["A", "a", "B", "C", "e", "E"];

const letraEncontrada = [];
let encontrada = false;


for (let i = 0; i <= letras.length; i++){
  if (letras[i] == "e" || letras[i] == "E"){
    encontrada = true

    letraEncontrada.push(letras[i])

  
  }

}


if(!encontrada){
  console.log("Não foi encontrada nenhuma letra 'e' ou 'E' no array")
} else{
  console.log(`Foram encontradas ${letraEncontrada.length} letras 'e' ou 'E'no array`)
}


