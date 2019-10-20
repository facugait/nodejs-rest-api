const Joi = require('@hapi/joi');

const dogSchema = Joi.object({
  name: Joi
    .string()
    .min(3)
    .max(8)
    .required(),
  race: Joi
    .string()
    .required(),
  color: Joi
    .string()
    .required()
})

const validation = () => {
  const scope = this;
  scope.Validate = (dog) => {
    const hasError = dogSchema.validate(dog, { abortEarly: false }).error;
    const messasge = !hasError ? "" : hasError.details.map((err) => err.message).join(', ');
    return { success: !hasError, messasge };
  }
  return scope;
};

module.exports = validation();