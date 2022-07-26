const fagotsRouter = require("express").Router();
const { getBoxInFagots, getCountFagots } = require("../models/fagots");

// Route getting only boxes in fagots
fagotsRouter.get("/", (req, res) => {
  getBoxInFagots()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error retrieving fagots");
    });
});

fagotsRouter.get("/count", (req, res) => {
  getCountFagots()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error retrieving number of fagots");
    });
});

module.exports = fagotsRouter;
