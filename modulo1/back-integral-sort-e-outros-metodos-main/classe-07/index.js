const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]
const arrayFiltrado = usuários.filter(x => {
    if (x.idade >= 18 && x.idade <= 65) {
        return true
    }
})

const todosHabilitados = arrayFiltrado.every(x => {
    return x.habilitado === true
})

if (todosHabilitados) {
    console.log("todos passaram no teste")
} else {
    console.log("todos precisam estar habilitados")
}