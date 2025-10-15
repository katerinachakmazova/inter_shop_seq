const { Router } = require('express');
// ===================================
const brandController = require('../controllers/brandsController');

const router = new Router();
router
  .route('/')
  .get(brandController.getBrands)
  .put(brandController.updateBrands)
  .delete(brandController.deleteBrands)
router.get('/middle', brandController.getBrandsFromMiddle);
router.get('/multiple', brandController.getSeveralBrands);

module.exports = router;
