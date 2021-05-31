const Joi = require('joi');

module.exports = {
  addAdminV: Joi.object({
    username: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    password: Joi.string()
      .required(),
    confirmPassword: Joi.ref('password'),
  }),
  loginAdmin: Joi.object({
    username: Joi.string(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
      .required(),
    }),
};
