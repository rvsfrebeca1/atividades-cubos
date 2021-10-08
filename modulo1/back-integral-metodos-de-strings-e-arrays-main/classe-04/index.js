let identificador = "123";
let nome = "José Silva Costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];
let maiusculaIindice = 0
let arrayNome = []


if (identificador.length < 6) {
  identificador = identificador.padStart(6, "00")
}

email = email.trim()
tags = tags.join(", ")

arrayNome = nome.split("")
arrayNome.splice(0, 1, `${nome[0].toLocaleLowerCase()}`)

for (let i = 0; i < nome.length; i++) {

  if (nome[i] === " ") {

    maiusculaIindice = i + 1

    arrayNome.splice(maiusculaIindice, 1, `${nome[maiusculaIindice].toLocaleLowerCase()}`)


  }

}
nome = arrayNome.join("")
console.log(identificador)
console.log(nome)
console.log(email)
console.log(tags)
maiusculaIindice = nome.indexOf(" ") + 1




// console.log(arrayNome.join(""))

