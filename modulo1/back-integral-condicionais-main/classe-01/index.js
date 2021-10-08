const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui
if(jogada1 == jogada2){
  console.log("EMPATE")

} else if(jogada1 == "pedra" && jogada2 == "papel"){

  console.log("PAPEL")
  
}else if(jogada1 == "pedra" && jogada2 == "tesoura"){

  
  console.log("PEDRA")

}else if(jogada1 == "papel" && jogada2 == "pedra"){

  console.log("PAPEL")

}else if(jogada1 == "papel" && jogada2 == "tesoura"){

  console.log("TESOURA")
  
}else if(jogada1 == "tesoura" && jogada2 == "papel"){

  console.log("TESOURA")

}else if(jogada1 == "tesoura" && jogada2 == "pedra"){

  console.log("PEDRA")

}