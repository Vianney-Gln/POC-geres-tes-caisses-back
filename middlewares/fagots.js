const { getBoxesByFagotId, updateIdFagotToNull } = require("../models/fagots");

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

module.exports = { checkBoxesInFagot };
