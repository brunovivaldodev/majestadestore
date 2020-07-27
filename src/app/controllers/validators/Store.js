const { Segments, Joi, celebrate } = require('celebrate');

const storeValidator = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.object({
      province: Joi.string().required(),
      street: Joi.string().required(),
      district: Joi.string().required(),
    }).required(),
    telephone: Joi.array().items(Joi.number().required()),
  }),
});

const updateValidator = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    address: Joi.object({
      province: Joi.string().optional(),
      street: Joi.string().optional(),
      district: Joi.string().optional(),
    }).optional(),
    telephone: Joi.array().items(Joi.number().optional()),
  }),
});

const indexValidator = celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
});

const showValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
});

const destroyValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(),
});
module.exports = {
  storeValidator,
  updateValidator,
  destroyValidator,
  indexValidator,
  showValidator,
};
