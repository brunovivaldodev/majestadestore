const { Segments, Joi, celebrate } = require('celebrate');

const storeValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports = {
  storeValidator,
};
