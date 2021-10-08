const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho', 'Rebeca'];

let tempoDeCadaJogador = 10 / jogadores.length

let contador = 0;
let intervalID = setInterval(() => {
  if (contador < jogadores.length) {
    console.log(jogadores[contador])
    contador++

  } else {
    console.log("A rodada terminou")
    clearInterval(intervalID)
  }
}, tempoDeCadaJogador * 1000)

