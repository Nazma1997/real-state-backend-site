const router = require('express').Router();
const userRoutes = require('./user')
const propertyRoutes = require('./property')




router.use('/api/v1/users',userRoutes);
router.use('/api/v1/properties', propertyRoutes);






module.exports = router