const { Router } = require('express');
// ===================================
const ordersController = require('../controllers/ordersController');

const router = new Router();
router
  .route('/')
  .get(ordersController.getOrders)
  .put(ordersController.updateOrders)
  .delete(ordersController.deleteOrders);
router.get('/middle', ordersController.getOrdersFromMiddle);
router.get('/multiple', ordersController.getSeveralOrders);

module.exports = router;
