const express = require('express');
// ================================
const router = require('./routers');
const {
  validationErrorHandler,
  httpErrorHandler,
  errorHandler,
} = require('./middleware/errorHandlers.mw');
const app = express();
app.use(express.json());
app.use(router);
app.use(validationErrorHandler, httpErrorHandler, errorHandler);
module.exports = app;
