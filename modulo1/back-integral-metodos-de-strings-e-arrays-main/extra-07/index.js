const celular = 71912345678;

let celularString = celular.toString()
let resultadoAnterior = ""

function tirarVirgulas(palavra) {

  let resultado = palavra
  for (let i = 0; i < palavra.length; i++) {





    if (resultado != resultadoAnterior) {
      resultadoAnterior = resultado
      resultado = resultado.replace(",", "")

    } else {
      return resultado
    }

  }
}

if (celularString.length === 11) {
  const array = celularString.split("")
  array.splice(0, 0, "(")
  array.splice(3, 0, ")")
  array.splice(4, 0, " ")
  array.splice(6, 0, " ")

  celularString = array.toString()

  console.log(tirarVirgulas(celularString))



} else if (celularString.length === 8) {
  const novoArray = celularString.split("")

  novoArray.splice(0, 0, "9")
  novoArray.splice(1, 0, " ")

  let arrayString = novoArray.toString()

  console.log(tirarVirgulas(arrayString))
} else if (celularString.length === 9) {

  let novoarray = []
  novoarray = celularString.split("")

  novoarray.splice(0, 0, "7")
  novoarray.splice(1, 0, "1")

  novoarray.splice(2, 0, " ")
  novoarray.splice(4, 0, " ")

  novoarray.splice(9, 0, "-")

  arrayStringdnv = novoarray.toString()

  console.log(novoarray)

}
