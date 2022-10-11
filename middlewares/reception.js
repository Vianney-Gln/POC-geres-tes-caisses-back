const { validateReception } = require("../helpers/formVerifs");
const { getFagots } = require("../models/fagots");
const { getTotalBoxes } = require("../models/total");

// Function running the validateReception JOI function looping for each row of the reception form.

const runValidateReception = (req, res, next) => {
  const data = req.body;
  const errors = [];

  data.forEach((row) => {
    const error = validateReception(row);
    if (error) {
      errors.push(error.details);
    }
  });
  if (errors.length) {
    res.status(401).send(errors);
  } else {
    next();
  }
};

// Function check if a bundle already exist
const checkIfBundleExist = (req, res, next) => {
  getFagots(req.query.article).then((result) => {
    if (result.find((elt) => elt.uuid === req.body.uuid)) {
      res.status(401).send("this bundle already exist");
    } else {
      next();
    }
  });
};
// Function check if duplicates between the body and the total stock
const checkDuplicate = (req, res, next) => {
  const body = req.body;
  let error = false;
  getTotalBoxes()
    .then((result) => {
      body.forEach((element) => {
        if (result.find((dat) => dat.uuid === element.uuid)) {
          error = true;
        }
      });
      if (error) {
        res.status(401).send("error, one or more identifiants already exist");
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("error");
    });
};

module.exports = { runValidateReception, checkIfBundleExist, checkDuplicate };
