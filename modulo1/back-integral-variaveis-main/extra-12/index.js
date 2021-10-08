let montante = 90000, capital = 60000, numerop = 24;

let i = ((Math.pow(montante/capital, 1/numerop) -1 ) * 100)

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${i}%, pois após ${numerop} meses você teve que pagar ${montante} reais.`)