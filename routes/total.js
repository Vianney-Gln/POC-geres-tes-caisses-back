const totalRouter = require("express").Router();
const { getTotalBoxes } = require("../models/total");

totalRouter.get("/", (req, res) => {
  getTotalBoxes()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error retrieving boxes");
    });
});

module.exports = totalRouter;
