const router = require('express').Router();
const validateFunction = require('../controllers/validate.function');
const validateToken = require('../controllers/token.validate');
const { BookV, updateBook } = require('../helpers/book.validate');
const { getBooks, addBook, editBook, deleteBook } = require('../controllers/main.controller');



router.get('/get-books', getBooks)

router.post('/add-book', validateToken, validateFunction(BookV), addBook)

router.put('/edit-book/:id', validateToken, validateFunction(updateBook), editBook)

router.delete('/delete-book/:id', validateToken, deleteBook)

module.exports = router;