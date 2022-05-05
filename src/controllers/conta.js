const conta = require("../models/conta");



module.exports = (app) => {
  app.post("/conta", (req, res, next) => {
    conta.incluirOperacao(req.body);
    res.status(200).json(conta); 
  });
};
