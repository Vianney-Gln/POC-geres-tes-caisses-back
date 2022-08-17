const outOfStockRouter = require("express").Router();

outOfStockRouter.delete("/", (req, res) => {
  console.log(req.body);
  // Pour chaque id lancer model, puis envoyer le resultat
});

module.exports = outOfStockRouter;
