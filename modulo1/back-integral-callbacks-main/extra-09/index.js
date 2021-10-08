const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }

];

//Filtre o array e retorne apenas os programadores que sejam maiores de 20 anos
let programadores = pessoas.filter((x) => x.profissao === "Programador" && x.idade > 20)

console.log(programadores)


//Filtre o array e retorne apenas os jornalistas que tenha mais de 30 anos

let jornalistas = pessoas.filter((x) => x.profissao === "Jornalista" && x.idade > 30)

console.log(jornalistas)



// Filtre o array e retorne os jornalistas e programadores que sejam jovens. Sabendo que, segundo o IBGE, é considerado jovem aquele que tem até 29 anos



let programadoresJornalistas = pessoas.filter((x) => x.profissao === "Programador" || x.profissao === "Jornalista" && x.idade < 29)

console.log(programadoresJornalistas)