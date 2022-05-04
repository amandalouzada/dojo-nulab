


module.exports = (app) => {
  app.post("/conta", (req, res, next) => {
    
    res.status(200).json(conta); 

  });
};
