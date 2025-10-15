const {Router} = require('express');
// ==============================
const brandRouter = require('./brandRouter')

const router = new Router();
router.use('/brands', brandRouter);

module.exports = router;