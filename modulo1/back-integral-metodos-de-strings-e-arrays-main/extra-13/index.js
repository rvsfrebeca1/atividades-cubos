const nomeArquivo = 'Foto da Familia.jpg';

function validarArquivo(nomeDoArquivo) {
  if (nomeArquivo.includes(".jpeg") || nomeArquivo.includes(".jpg") || nomeArquivo.includes(".gif") || nomeArquivo.includes(".png")) {
    console.log("Arquivo Válido")
  } else {
    console.log("Arquivo inválido")
  }
}



validarArquivo(nomeArquivo)