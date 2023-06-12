const router = require('express').Router();
const {createUser, loginUser, getAllUsers} = require('../controllers/users');

/**
 * create and register
 * @method POST
 */

router.post('/', createUser);

/**
 * Login
 */
router.post('/login', loginUser);

/**
 * all users
 */
router.get('/', getAllUsers);










module.exports = router;


