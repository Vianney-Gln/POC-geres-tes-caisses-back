const fagotsRouter = require("express").Router();
const {
  getBoxInFagots,
  getCountFagots,
  getFagots,
  getBoxesByFagotId,
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
  getFagots(req.query.article)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error request find fagots");
    });
});

// Route getting boxes in a fagot
fagotsRouter.get("/:id", (req, res) => {
  getBoxesByFagotId(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error retrieving boxes by fagots");
    });
});

module.exports = fagotsRouter;
