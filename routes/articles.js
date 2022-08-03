const articlesRouter = require("express").Router();

// Models
const { getArticles } = require("../models/articles");

// Route getting articles

articlesRouter.get("/", (req, res) => {
  getArticles()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error retrieving articles");
    });
});

module.exports = articlesRouter;
