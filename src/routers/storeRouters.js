const { Router } = require('express');
// ===================================
const storeController = require('../controllers/storesController');
const { paginate } = require('../middleware/pagination.mw');

const router = new Router();
router
  .route('/')
  .get(paginate, storeController.getStores)
  .put(storeController.updateStores)
  .delete(storeController.deleteStores);
router.get('/middle', storeController.getStoresFromMiddle);
router.get('/multiple', storeController.getSeveralStores);

module.exports = router;
