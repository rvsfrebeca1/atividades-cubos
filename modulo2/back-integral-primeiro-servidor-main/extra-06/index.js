const express = require('express')
const app = express()


let minuto = 0
let segundo = 0

let idIntervalMinuto;
let idintervalSegundo;

app.get("/", (req, res) => {
  res.send(`${minuto} Minutos e ${segundo} segundos`)
})

app.get("/iniciar", (req, res) => {
  idintervalSegundo = setInterval(() => {

    if (segundo === 60) {
      segundo = 0
      minuto++
    }

    segundo++

  }, 1000)



  res.send("Cronometro iniciado!")

})


app.get("/pausar", (req, res) => {

  clearInterval(idIntervalMinuto)
  clearInterval(idintervalSegundo)



  res.send("Cronometro Pausado")

})


app.get("/continuar", (req, res) => {
  clearInterval(idIntervalMinuto)
  clearInterval(idintervalSegundo)
  idintervalSegundo = setInterval(() => {

    if (segundo === 60) {
      segundo = 0
      minuto++
    }

    segundo++

  }, 1000)
  res.send("Cronometro continuando")
})

app.get("/zerar", (req, res) => {
  minuto = 0
  segundo = 0
  res.send("Cronometro zerado")
})


app.listen(8000)