const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];


let cidadeMaior = cidades.reduce((acumulador, x) => x.length > acumulador.length ? x : acumulador)

console.log(cidadeMaior)