const {
  VALIDATE_UPDATE_CUSTOMER_SCHEMA,
  VALIDATE_UPDATE_ORDER_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateCustomer = async (req, res, next) => {
  const { body } = req;
  try {
    const validatedCustomer = await VALIDATE_UPDATE_CUSTOMER_SCHEMA.validate(
      body
    );
    req.body = validatedCustomer;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports.validateOrder = async (req, res, next) => {
  const { body } = req;
  try {
    const validatedOrder = await VALIDATE_UPDATE_ORDER_SCHEMA.validate(body);
    req.body = validatedOrder;
    next();
  } catch (error) {
    next(error);
  }
};
