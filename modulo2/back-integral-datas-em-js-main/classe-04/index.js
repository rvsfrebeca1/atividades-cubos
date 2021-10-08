const { set, getDay, isWithinInterval } = require("date-fns")

function taAberto(data) {
  const horaQueAbre = set(data, { hours: 8 })
  const horaQueFecha = set(data, { hours: 18, minutes: 01 })
  const DOMINGO = 0
  const SABADO = 6
  console.log(data.getDay())
  if (!(isWithinInterval(data, { start: horaQueAbre, end: horaQueFecha }))) {

    return false
  } else {
    return !(data.getDay() === DOMINGO || data.getDay() === SABADO)
  }

}


console.log(taAberto(new Date(2021, 3, 26, 7, 59)))
