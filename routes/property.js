const router = require('express').Router();
const {createProperty} = require('../controllers/property');



/**
 * Create a property
 */
router.post('/', createProperty);




module.exports = router