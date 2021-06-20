const Joi = require('joi');

module.exports = {
  BookV: Joi.object({
    nombre: Joi.string().required(),
    idioma: Joi.string().required(),
    pagina: Joi.number().required(),
    editorial: Joi.string().required(),
    categoria: Joi.string().required(),
    fecha_lanzamiento: Joi.number().required(),
    reservado: Joi.boolean().required(),
    img: Joi.string(),
    id_autor: Joi.number(),
    descripcion: Joi.string()
  }),
  updateBook: Joi.object({
    nombre: Joi.string(),
    idioma: Joi.string(),
    pagina: Joi.number(),
    editorial: Joi.string(),
    categoria: Joi.string(),
    fecha_lanzamiento: Joi.number(),
    reservado: Joi.boolean(),
    img: Joi.string(),
    id_autor: Joi.number(),
    descripcion: Joi.string()
    }),
};
