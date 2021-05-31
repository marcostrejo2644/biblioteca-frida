const router = require('express').Router();
const { addAdmin, logIn } = require('../controllers/admin.controller');
const { addAdminV, loginAdmin } = require('../helpers/admin.validate');
const validateFunction = require('../controllers/validate.function');

router.post('/add-admin', validateFunction(addAdminV) ,addAdmin);

router.post('/login-panel', validateFunction(loginAdmin), logIn)


module.exports = router;