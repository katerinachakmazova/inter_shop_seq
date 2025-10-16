const {Router} = require('express');
// ==============================
const brandRouter = require('./brandRouter')
const customerRouter = require('./customerRouter')

const router = new Router();
router.use('/brands', brandRouter);
router.use('/customers', customerRouter);

module.exports = router;