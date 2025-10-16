const { Router } = require('express');
// ===================================
const customerController = require('../controllers/customersController');
const { paginate } = require('../middleware/pagination.mw');
const { validateCustomer } = require('../middleware/validate.mw');

const router = new Router();
router
  .route('/')
  .get(paginate, customerController.getCustomers)
  .put(validateCustomer, customerController.updateCustomers)
  .delete(customerController.deleteCustomers);
router.get('/middle', customerController.getCustomersFromMiddle);
router.get('/multiple', customerController.getSeveralCustomers);

module.exports = router;
