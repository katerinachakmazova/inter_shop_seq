const { Router } = require('express');
// ==============================
const brandRouter = require('./brandRouters');
const customerRouter = require('./customerRouters');
const storeRouter = require('./storeRouters');
const itemCategoryRouter = require('./itemCategoryRouters');
const itemTypeRouter = require('./ItemTypeRouters');
const modelRouter = require('./modelRouters')

const router = new Router();
router.use('/brands', brandRouter);
router.use('/customers', customerRouter);
router.use('/stores', storeRouter);
router.use('/item_categories', itemCategoryRouter);
router.use('/item_types', itemTypeRouter)
router.use('/models', modelRouter)

module.exports = router;
