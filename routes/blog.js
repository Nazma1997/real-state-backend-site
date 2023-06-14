const router = require('express').Router();
const {createBlog, getAllBlog} = require('../controllers/blog');



/**
 * Create a property
 */
router.post('/', createBlog);

/**
 * all properties
 */

router.get('/', getAllBlog);

module.exports = router