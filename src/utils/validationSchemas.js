const yup = require('yup');

const VALIDATE_ID_SCHEMA = yup.number().integer().required();
const VALIDATE_UPDATE_CUSTOMER_SCHEMA = yup.object().shape({
  id: VALIDATE_ID_SCHEMA.required(),
  full_name: yup.string().min(2),
  email: yup.string().email(),
});

const VALIDATE_UPDATE_ORDER_SCHEMA = yup.object().shape({
  id: VALIDATE_ID_SCHEMA.required(),
  code: yup.number().integer().positive(),
  customer_id: yup.number().integer().positive(),
});
const PAGINATION_SCHEMA = yup.object().shape({
  offset: yup.number().integer().positive().required(),
});
module.exports = {
  VALIDATE_UPDATE_CUSTOMER_SCHEMA,
  VALIDATE_UPDATE_ORDER_SCHEMA,
  PAGINATION_SCHEMA,
};
