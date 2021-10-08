const { format } = require('date-fns')



function formatCompletoComDe(data) {
  console.log(format(data, "dd 'de' MMMMMM 'de' yyyy"))
}

function formatCompletoComBarra(data) {
  console.log(format(data, "dd/MM/yyyy"))

}
function formatParcialComEspaco(data) {
  console.log(format(data, "dd MMM"))

}
function formatCompletoComEspaco(data) {
  console.log(format(data, "dd MMM yyyy"))

}
function formatParcialComDe(data) {
  console.log(format(data, "dd 'de' MMM 'de' yyyy"))

}

function formatParical(data) {
  console.log(format(data, "dd/MMM"))

}

// a) ```05 de outubro de 2020```
// b) ```05/10/2020```
// c) ```5 out```
// d) ```05 out 2020```
// e) ```05 de out de 2020```
// f) ```05/out```