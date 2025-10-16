const { Router } = require('express');
// ===================================
const itemCategoriesController = require('../controllers/itemCategoriesController');

const router = new Router();
router
  .route('/')
  .get(itemCategoriesController.getItemCategories)
  .put(itemCategoriesController.updateItemCategories)
  .delete(itemCategoriesController.deleteItemCategories);
router.get('/middle', itemCategoriesController.getItemCategoriesFromMiddle);
router.get('/multiple', itemCategoriesController.getSeveralItemCategories);

module.exports = router;
