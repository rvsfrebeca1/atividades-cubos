const caractere = "B";



const aMaiusculo = "A", eMaiusculo = "E", iMaiusculo = "I", oMaiusculo = "O", uMaiusculo = "U";
const aMinusculo = "a", eMinusculo = "e", iMinusculo = "i", oMinusculo = "o"
  , uMinusculo = "u";

const numero1 = 1, numero2 = 2, numero3 = 3, numero4 = 4, numero5 = 5, numero6 = 6, numero7 = 7, numero8 = 8, numero9 = 9, numero0 = 0;


if (caractere === aMaiusculo || caractere === aMinusculo || caractere === eMaiusculo || caractere === eMinusculo || caractere === iMaiusculo || caractere === iMinusculo || caractere === oMaiusculo || caractere === oMinusculo || caractere === uMaiusculo || caractere === uMinusculo) {


  console.log("Vogal")

} else if (caractere === numero0 || caractere === numero1 || caractere === numero2 || caractere === numero3 || caractere === numero4 || caractere === numero5 || caractere === numero6 || caractere === numero7 || caractere === numero8 || caractere === numero9) {

  console.log("Número")

} else {
  console.log('Consoante')
}