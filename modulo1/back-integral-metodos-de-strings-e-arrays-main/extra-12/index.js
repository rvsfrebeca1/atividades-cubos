const nome = 'Guido Cerqueira';

let nickname = "";


function criarNick(nome) {
  nickname = nome.slice(0, 13).split(" ").join("").toLowerCase().padStart(13, "@")
  return nickname
}
console.log(criarNick(nome))