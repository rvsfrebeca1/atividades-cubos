const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda', 'rebeca', 'amanda'];
const tamanhoDoGrupo = 4;

function separarGrupos(grupoDePessoas, tamanhoDoGrupo) {
  const resultado = [];

  var numeroGrupo = 1;
  for (var i = 0; i < grupoDePessoas.length; i = i + tamanhoDoGrupo) {




    console.log(`Grupo ${numeroGrupo}: ${grupoDePessoas.slice(i, (i + tamanhoDoGrupo)).join(', ')}`);
    numeroGrupo++;
  }
}

separarGrupos(nomes, tamanhoDoGrupo)