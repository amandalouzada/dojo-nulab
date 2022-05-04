const conta = require("../models/conta");



module.exports = (app) => {
  app.post("/conta", (req, res, next) => {
    const operacao = req.body.operacao;
    const valor = req.body.valor;
    conta.incluirOperacao(operacao, valor)
    
    res.status(200).json(conta); 

  });
};
