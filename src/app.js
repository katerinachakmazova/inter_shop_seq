const express = require('express');
const cors = require('cors')
// ================================
const router = require('./routers');
const {
  validationErrorHandler,
  httpErrorHandler,
  errorHandler,
} = require('./middleware/errorHandlers.mw');
const app = express();
app.use(express.json());
app.use(cors())
app.use(router);
app.use(validationErrorHandler, httpErrorHandler, errorHandler);
module.exports = app;
