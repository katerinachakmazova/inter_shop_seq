const { Router } = require('express');
// ===================================
const ordersController = require('../controllers/ordersController');
const { validateOrder } = require('../middleware/validate.mw');
const { paginate } = require('../middleware/pagination.mw');

const router = new Router();
router
  .route('/')
  .get(paginate, ordersController.getOrders)
  .put(validateOrder, ordersController.updateOrders)
  .delete(ordersController.deleteOrders);
router.get('/middle', ordersController.getOrdersFromMiddle);
router.get('/multiple', ordersController.getSeveralOrders);

module.exports = router;
