const router = require('express').Router();
const validateToken = require('../controllers/token.validate');
const validateFunction = require('../controllers/validate.function');
const { addAdmin, logIn, verifyToken } = require('../controllers/admin.controller');
const { addAdminV, loginAdmin } = require('../helpers/admin.validate');

router.post('/add-admin', validateFunction(addAdminV) ,addAdmin);

router.post('/login-panel', validateFunction(loginAdmin), logIn)

router.post('/verify-token', validateToken, verifyToken)


module.exports = router;