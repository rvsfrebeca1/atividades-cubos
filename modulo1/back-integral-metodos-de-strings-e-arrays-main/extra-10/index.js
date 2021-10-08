const cpf = "011.022.033-44";



let resultado = cpf

let resultadoAnterior = ""

for (let i = 0; i < cpf.length; i++) {




  if (resultado != resultadoAnterior) {
    resultadoAnterior = resultado
    resultado = resultado.replace(".", "")
    resultado = resultado.replace("-", "")

  } else {
    console.log(resultado)
    break
  }

}
