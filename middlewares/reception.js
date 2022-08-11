const validateReception = require("../helpers/formVerifs");

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

module.exports = { runValidateReception };
