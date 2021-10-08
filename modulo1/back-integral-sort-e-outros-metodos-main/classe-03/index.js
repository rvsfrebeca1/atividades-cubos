const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];


let maiorValor = numeros.reduce((acc, x) => x > acc ? x : acc)

console.log(maiorValor)