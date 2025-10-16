const { Router } = require('express');
// ===================================
const itemCategoriesController = require('../controllers/itemCategoriesController');
const { paginate } = require('../middleware/pagination.mw');

const router = new Router();
router
  .route('/')
  .get(paginate, itemCategoriesController.getItemCategories)
  .put(itemCategoriesController.updateItemCategories)
  .delete(itemCategoriesController.deleteItemCategories);
router.get('/middle', itemCategoriesController.getItemCategoriesFromMiddle);
router.get('/multiple', itemCategoriesController.getSeveralItemCategories);

module.exports = router;
