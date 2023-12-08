const router = require('express').Router();

const blogPostRoutes = require('./blogPostRoutes');

router.use('/blogPost', blogPostRoutes);

module.exports = router;