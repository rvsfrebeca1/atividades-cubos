const { isAfter, isBefore, set, isWithinInterval } = require('date-fns')


function taAberto(data) {

  const horaQueAbre = set(data, { hours: 8 })
  const horaQueFecha = set(data, { hours: 18, minutes: 01 })
  console.log(data)
  console.log(horaQueAbre)
  console.log(horaQueFecha)

  return isWithinInterval(data, { start: horaQueAbre, end: horaQueFecha })
}
// +data > +horaQueAbre && +data < +horasQueFecha

console.log(taAberto(new Date(2015, 1, 1, 2)))