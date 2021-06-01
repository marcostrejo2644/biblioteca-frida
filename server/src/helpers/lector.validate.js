const Joi = require('joi');

module.exports = {
  lectorV: Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.number(),
    mail: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
    telefono: Joi.number(),
  }),
  updateLector: Joi.object({
    nombre: Joi.string(),
    apellido: Joi.string(),
    dni: Joi.number(),
    mail: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    telefono: Joi.number(),
    }),
};
