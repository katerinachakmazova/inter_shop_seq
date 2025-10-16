const { Router } = require('express');
// ===================================
const modelsController = require('../controllers/modelsController');
const { paginate } = require('../middleware/pagination.mw');

const router = new Router();
router
  .route('/')
  .get(paginate, modelsController.getModels)
  .put(modelsController.updateModels)
  .delete(modelsController.deleteModels);
router.get('/middle', modelsController.getModelsFromMiddle);
router.get('/multiple', modelsController.getSeveralModels);

module.exports = router;
