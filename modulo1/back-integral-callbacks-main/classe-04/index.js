const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

let arrayNovo = numeros.filter((x) => {
  return x >= 0
})

console.log(arrayNovo)
