const {
  getBoxesByFagotId,
  updateIdFagotToNull,
  getInfosFagotById,
} = require("../models/fagots");

// Function checking if a fagot contain boxes.
const checkBoxesInFagot = (req, res, next) => {
  getBoxesByFagotId(req.params.id).then((result) => {
    if (result.length) {
      updateIdFagotToNull(req.params.id)
        .then(() => {
          next();
        })
        .catch((err) => {
          console.log(err);
          res.status(400).send("error deleting fagots");
        });
    } else {
      next();
    }
  });
};

// Function checking if boxes have the same size as the bundle. If not send an error.
const checkBoxesSizes = (req, res, next) => {
  const body = req.body;
  const verifiedBoxes = [];
  let error = false;
  getInfosFagotById(req.params.id)
    .then((result) => {
      body.forEach((dat) => {
        if (dat.name !== result.name) {
          error = true;
        } else {
          verifiedBoxes.push(dat);
        }
      });
      if (error === false) {
        req.verifiedBoxes = verifiedBoxes;
        next();
      } else {
        res.status(401).send("Boxes must have the same size to the bundle");
      }
    })
    .catch(() => res.status(404).send("error retrieving infos fagot"));
};

module.exports = { checkBoxesInFagot, checkBoxesSizes };
