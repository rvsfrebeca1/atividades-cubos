const { imoveis } = require("../dados/imoveis")


function consultarImoveis(req, res) {
  res.json(imoveis)
}


function consultarImovelPorId(req, res) {
  let imovel = imoveis.find(x => {
    return x.id === Number(req.params.idDoImovel)
  })
  res.json(imovel)
}

module.exports = { consultarImoveis, consultarImovelPorId }