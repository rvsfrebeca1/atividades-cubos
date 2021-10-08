const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const novoArray = numeros.filter((x) => {
  return x % 2 === 0
})

console.log(novoArray)
