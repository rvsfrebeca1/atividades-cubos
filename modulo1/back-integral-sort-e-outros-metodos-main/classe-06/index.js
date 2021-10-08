const numeros = [0, 122, 4, 6, 8, 7, 44];

const todosPares = numeros.every(x => {
  return x % 2 === 0
})

if (todosPares) {
  console.log("array válido")
} else {
  console.log("array inválido")
}

