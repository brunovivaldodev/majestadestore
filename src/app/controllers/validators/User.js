const { Segments, Joi, celebrate } = require('celebrate');

const indexValidator = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
});

const showValidator = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }).required(),
});

const storeValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    permition: Joi.string().optional(),
  }),
});
const updateValidator = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional(),
    permition: Joi.string().optional(),
  }),
});

const destroyValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }).required(),
});

module.exports = {
  indexValidator,
  showValidator,
  storeValidator,
  updateValidator,
  destroyValidator,
};
