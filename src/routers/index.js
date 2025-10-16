const {Router} = require('express');
// ==============================
const brandRouter = require('./brandRouter')
const customerRouter = require('./customerRouter')
const storeRouter = require('./storeRouter')
const itemCategoryRouter = require('./itemCategoryRouters')

const router = new Router();
router.use('/brands', brandRouter);
router.use('/customers', customerRouter);
router.use('/stores', storeRouter);
router.use('/item_categories',itemCategoryRouter )

module.exports = router;