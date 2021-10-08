const { isAfter, isBefore, set, isWithinInterval, getDay } = require('date-fns')

function taAberto(data) {
  const DOMINGO = 0
  const SABADO = 6
  const horaQueAbre = set(data, { hours: 8 })
  const horaQueFecha = set(data, { hours: 18, minutes: 01 })

  const horaQueAbreSab = set(data, { hours: 8 })
  const horaQueFechaSab = set(data, { hours: 12, minutes: 01 })

  if (+data > +horaQueAbre && +data < +horaQueFecha) {
    if (data.getDay() === DOMINGO) {
      return false

    } else if (data.getDay() === SABADO) {

      if (+data > +horaQueAbreSab && +data < +horaQueFechaSab) {

        return true
      } else {
        return false
      }
    } else {
      return true
    }


  } else {

    return false

  }
}

console.log(taAberto(new Date(2021, 3, 24, 9, 30)))


taAberto(new Date(2021, 3, 25, 12))// false

taAberto(new Date(2021, 3, 26, 12))// true

taAberto(new Date(2021, 3, 26, 7, 59)) // false

taAberto(new Date(2021, 3, 24, 9, 30))// true