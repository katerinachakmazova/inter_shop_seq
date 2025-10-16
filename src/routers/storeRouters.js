const { Router } = require('express');
// ===================================
const storeController = require('../controllers/storesController');

const router = new Router();
router
  .route('/')
  .get(storeController.getStores)
  .put(storeController.updateStores)
  .delete(storeController.deleteStores);
router.get('/middle', storeController.getStoresFromMiddle);
router.get('/multiple', storeController.getSeveralStores);

module.exports = router;
