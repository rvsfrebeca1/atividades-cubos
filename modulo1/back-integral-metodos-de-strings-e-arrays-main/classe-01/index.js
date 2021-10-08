const comentario = "Esse é muito perigoso!";

let palavra = comentario.includes("Covid")

if (comentario.includes("Covid") || comentario.includes("COVID") || comentario.includes("covid")) {

  console.log(`Comentário bloqueado por conter palavras proibidas`)
} else {
  console.log(`Cometário autorizado`)
}
