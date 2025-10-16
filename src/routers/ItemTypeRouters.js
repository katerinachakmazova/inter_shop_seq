const { Router } = require('express');
// ===================================
const itemTypesController = require('../controllers/ItemTypesController');
const { paginate } = require('../middleware/pagination.mw');

const router = new Router();
router
  .route('/')
  .get(paginate, itemTypesController.getItemTypes)
  .put(itemTypesController.updateItemTypes)
  .delete(itemTypesController.deleteItemTypes);
router.get('/middle', itemTypesController.getItemTypesFromMiddle);
router.get('/multiple', itemTypesController.getSeveralItemTypes);

module.exports = router;
