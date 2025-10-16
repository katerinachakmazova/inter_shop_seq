const { Router } = require('express');
// ===================================
const itemTypesController = require('../controllers/ItemTypesController');

const router = new Router();
router
  .route('/')
  .get(itemTypesController.getItemTypes)
  .put(itemTypesController.updateItemTypes)
  .delete(itemTypesController.deleteItemTypes);
router.get('/middle', itemTypesController.getItemTypesFromMiddle);
router.get('/multiple', itemTypesController.getSeveralItemTypes);

module.exports = router;
