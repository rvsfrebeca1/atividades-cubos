const { addDays, isWithinInterval } = require('date-fns')

function promocao(dataDeInicio, dataSolicitada) {
  const fimDaPromo = addDays(dataDeInicio, 30)
  console.log(dataDeInicio)
  console.log(fimDaPromo)
  console.log(dataSolicitada)
  return isWithinInterval(dataSolicitada, { start: dataDeInicio, end: fimDaPromo })

}


console.log(promocao(new Date(2014, 6, 10, 10, 0), new Date(2014, 6, 11, 11, 5)))