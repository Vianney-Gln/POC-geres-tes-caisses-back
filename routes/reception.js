const receptionRouter = require("express").Router();
// Models
const { sendReception } = require("../models/reception");

// Route sending a reception of boxes into db
receptionRouter.post("/", (req, res) => {
  sendReception(req.body).then((result) => {
    if (result.length) {
      res.status(203).send("reception sended");
    } else {
      res.status(400).send("error sending reception");
    }
  });
});

module.exports = receptionRouter;
