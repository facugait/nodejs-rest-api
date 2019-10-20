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

module.exports = dogSchema;