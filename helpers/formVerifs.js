const Joi = require("joi");

// Function checking if uuid and id_article are compliant -- escape specs chars
const validateReception = (data) => {
  return Joi.object({
    uuid: Joi.string()
      .presence("required")
      .regex(/[$\(\)<>]/, { invert: true }),
    id_article: Joi.number().presence("required"),
  }).validate(data, { abortEarly: false, allowUnknown: true }).error;
};

module.exports = validateReception;
