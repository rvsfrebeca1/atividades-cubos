const { Console } = require('console');
const fs = require('fs');

fs.writeFile('./meuarquivo.txt', "Estou aprendendo JavaScript na Cubos Academy", () => {
  console.log("Feito")
})
