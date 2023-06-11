const router = require('express').Router();
const {createUser} = require('../controllers/users');

/**
 * @method POST
 */

router.post('/', createUser);









module.exports = router;


