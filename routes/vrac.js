const vracRouter = require("express").Router();
// Models
const { getStockVrac, getCountVrac } = require("../models/vrac");

// Route getting stock vrac
vracRouter.get("/", (req, res) => {
  getStockVrac(req.query.article)
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("no stock found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error request to get stock");
    });
});
// Route getting count "caisses vrac"
vracRouter.get("/count", (req, res) => {
  getCountVrac(req.query.article)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error request count");
    });
});
module.exports = vracRouter;
