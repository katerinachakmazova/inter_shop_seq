const { Router } = require('express');
// ===================================
const modelsController = require('../controllers/modelsController');

const router = new Router();
router
  .route('/')
  .get(modelsController.getModels)
  .put(modelsController.updateModels)
  .delete(modelsController.deleteModels);
router.get('/middle', modelsController.getModelsFromMiddle);
router.get('/multiple', modelsController.getSeveralModels);

module.exports = router;
