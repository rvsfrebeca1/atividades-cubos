const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];




numeros.sort((a, b) => a - b) // CRESCENTE

numeros.sort((a, b) => b - a) ///DECRESCENTE

console.log(numeros)



frutas.sort((a, b) => a.localeCompare(b)) //ALFABÉTICA

frutas.sort((a, b) => b.localeCompare(a)) // ALFABÉTICA DESCRESENTE


frutas.sort((a, b) => a.length - b.length) // EM ORDEM CRESCENTE PELO NÚMERO DE LETRAS

console.log(frutas)