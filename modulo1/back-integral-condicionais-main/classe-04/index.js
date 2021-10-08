const ladoA = 6;
const ladoB = 6;



//seu código aqui
if(ladoA == ladoB){

  if(ladoA == 0 && ladoB == 0){

    console.log("BRANCO")
  
  } else if (ladoA == 1 && ladoB == 1){
  
    console.log("ÁS")
  
  } else if (ladoA == 2 && ladoB == 2){
  
    console.log("DUQUE")
  
  }else if (ladoA == 3 && ladoB == 3){
  
    console.log("TERNO")
  
  }else if (ladoA == 4 && ladoB == 4){
  
    console.log("QUADRA")
  
  }else if (ladoA == 5 && ladoB == 5){
  
    console.log("QUINA")
  
  } else if(ladoA == 6 && ladoB == 6){
  
  console.log("SENA")
  
  } else {
    console.log("SIM")
  }

} else {
  console.log("NÃO")
}
