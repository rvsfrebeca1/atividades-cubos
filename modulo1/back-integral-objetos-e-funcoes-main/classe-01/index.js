const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let respostasCorretas = 0

function corrigindoProva(prova) {

    for (questao of prova.questoes) {

        if (questao.resposta === questao.correta) {
            respostasCorretas++
        }


    }
}

corrigindoProva(prova)
console.log(`O aluno ${prova.aluno} acertou ${respostasCorretas} questões e obteve nota ${2 * respostasCorretas}`)






