const outOfStockRouter = require("express").Router();
const { deleteRows } = require("../models/outOfStock");

// Route deleting rows from table stock
outOfStockRouter.delete("/", (req, res) => {
  deleteRows(req.body)
    .then(() => {
      res.status(203).send("rows deleted successly");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("error while delete");
    });
});

module.exports = outOfStockRouter;
