const totalRouter = require("express").Router();
const { getTotalBoxes, getCountTotalBoxes } = require("../models/total");

// route getting total boxes - can be sorted by length
totalRouter.get("/", (req, res) => {
  getTotalBoxes(req.query.article)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error retrieving boxes");
    });
});

// route getting the count of boxes
totalRouter.get("/count", (req, res) => {
  getCountTotalBoxes(req.query.article)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error retrieving the number of boxes");
    });
});

module.exports = totalRouter;
