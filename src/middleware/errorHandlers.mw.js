const { ValidationError } = require('yup');
const createError = require('http-errors');
module.exports.validationErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).send({
      errors: [
        {
          title: 'Validation error',
          details: err.errors,
        },
      ],
    });
  } else {
    next(err);
  }
};
module.exports.httpErrorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  if (createError.isHttpError(err)) {
    return res.status(err.status).send({
      errors: [
        {
          title: 'Http error',
          details: err.message,
        },
      ],
    });
  } else {
    next(err);
  }
};
module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  res.status(err?.status ?? 500).send({
    errors: [
      {
        title: err?.message ?? `Internal server error`,
      },
    ],
  });
};
