const { Router } = require('express');
// ===================================
const customerController = require('../controllers/customersController');

const router = new Router();
router
  .route('/')
  .get(customerController.getCustomers)
  .put(customerController.updateCustomers)
  .delete(customerController.deleteCustomers);
router.get('/middle', customerController.getCustomersFromMiddle);
router.get('/multiple', customerController.getSeveralCustomers);

module.exports = router;
