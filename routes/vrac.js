const vracRouter = require("express").Router();
// Models
const { getStockVrac } = require("../models/vrac");

// Route getting stock vrac
vracRouter.get("/", (req, res) => {
  getStockVrac()
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

module.exports = vracRouter;
