
module.exports = (app) => {
  app.get("/conta", (req, res, next) => {
     res.status(200).json({"ola":"mundo"});
  });
};
