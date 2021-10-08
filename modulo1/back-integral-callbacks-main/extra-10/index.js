const notas = [6, 8, 9, 8];

const numeroUnico = []
notas.forEach((item) => {

  const verificaAExistencia = numeroUnico.find((valor) => {
    return valor == item
  })

  if (!verificaAExistencia) {
    numeroUnico.push(item)
  }

})


console.log(numeroUnico)
