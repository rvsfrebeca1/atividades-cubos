const cpf = "12345678900";
const cnpj = "12345678900000";
let cpfarray = [];
let cnpjarray = [];

function imprimirCPF(cpf) {
  if (cpf.length === 11) {
    cpfarray = cpf.split("")
    cpfarray.splice(3, 0, ".")
    cpfarray.splice(7, 0, ".")
    cpfarray.splice(11, 0, "-")

    console.log(cpfarray.join(""))

  } else {
    console.log(`CPF Inválido`)
  }


}

// 12.345.678/0001-99

function imprimirCNPJ(cnpj) {
  if (cnpj.length === 14) {
    cnpjarray = cnpj.split("")
    cnpjarray.splice(2, 0, ".")
    cnpjarray.splice(6, 0, ".")
    cnpjarray.splice(10, 0, "/")
    cnpjarray.splice(15, 0, "-")


    console.log(cnpjarray.join(""))

  } else {

    console.log(`CPNJ Inválido`)
  }



}

imprimirCNPJ(cnpj)