const fagotsRouter = require("express").Router();
const {
  getBoxInFagots,
  getCountFagots,
  getFagots,
} = require("../models/fagots");

// Route getting only boxes in fagots
fagotsRouter.get("/box-in-fagots", (req, res) => {
  getBoxInFagots()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error retrieving fagots");
    });
});

// Route getting the number of fagots;
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

// Route getting fagots
fagotsRouter.get("/", (req, res) => {
  getFagots()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error request find fagots");
    });
});

module.exports = fagotsRouter;
