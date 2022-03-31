

exports.paginaInicial = (req, res) => {
  res.render('index')
  return
}

exports.trataPost = (req, res) => {
  const requisicao = req.body.NOME
  res.send(req.body)
  return
}