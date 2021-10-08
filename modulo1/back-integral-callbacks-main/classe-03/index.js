const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

let arrayModified = frutas.map((x, i) => {
  let primeiraLetraMaiuscula = x[0].toUpperCase() + x.substr(1).toLowerCase()
  return `${i} - ${primeiraLetraMaiuscula}`
})
console.log(arrayModified)
