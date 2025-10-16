const { Router } = require('express');
// ===================================
const itemsController = require('../controllers/itemsController');
const { paginate } = require('../middleware/pagination.mw');

const router = new Router();
router
  .route('/')
  .get(paginate, itemsController.getItems)
  .put(itemsController.updateItems)
  .delete(itemsController.deleteItems);
router.get('/middle', itemsController.getItemsFromMiddle);

module.exports = router;
