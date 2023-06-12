const router = require('express').Router();
const {createUser, loginUser} = require('../controllers/users');

/**
 * create and register
 * @method POST
 */

router.post('/', createUser);

/**
 * Login
 */
router.post('/login', loginUser);










module.exports = router;


