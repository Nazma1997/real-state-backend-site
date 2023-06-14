const router = require('express').Router();
const userRoutes = require('./user')
const propertyRoutes = require('./property')
const blogRoutes = require('./blog')



router.use('/api/v1/users',userRoutes);
router.use('/api/v1/properties', propertyRoutes);
router.use('/api/v1/blogs', blogRoutes);






module.exports = router