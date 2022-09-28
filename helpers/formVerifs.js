const Joi = require("joi");

// Function checking if uuid and id_article are compliant -- escape specs chars
const validateReception = (data) => {
  const year = new Date().getFullYear().toString();
  return Joi.object({
    uuid: Joi.string()
      .presence("required")
      .length(10)
      .regex(/^${year}/)
      .regex(/^[0-9]+$/),
    id_article: Joi.number().presence("required"),
  }).validate(data, { abortEarly: false, allowUnknown: true }).error;
};

module.exports = validateReception;
