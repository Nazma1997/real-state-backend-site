const router = require('express').Router();
const {createProperty, getAllProperties} = require('../controllers/property');



/**
 * Create a property
 */
router.post('/', createProperty);

/**
 * all properties
 */

router.get('/', getAllProperties);

module.exports = router