const router = require('express').Router();
const { getBooks } = require('../controllers/main.controller')
const validateFunction = require('../controllers/validate.function');


router.get('/get-books', getBooks)

module.exports = router;