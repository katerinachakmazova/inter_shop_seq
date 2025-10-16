const { Router } = require('express');
// ===================================
const itemsController = require('../controllers/itemsController');

const router = new Router();
router
  .route('/')
  .get(itemsController.getItems)
  .put(itemsController.updateItems)
  .delete(itemsController.deleteItems);
router.get('/middle', itemsController.getItemsFromMiddle);

module.exports = router;
