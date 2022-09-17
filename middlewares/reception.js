const validateReception = require("../helpers/formVerifs");
const { getFagots } = require("../models/fagots");

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

const checkIfBundleExist = (req, res, next) => {
  //model gettting all boxes stored in variable
  //compare this variable to the req.body

  getFagots(req.query.article).then((result) => {
    if (result.find((elt) => elt.uuid === req.body.uuid)) {
      res.status(401).send("this bundle already exist");
    } else {
      next();
    }
  });
};

module.exports = { runValidateReception, checkIfBundleExist };
