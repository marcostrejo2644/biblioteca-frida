const router = require('express').Router();
const { BookV, updateBook } = require('../helpers/book.validate');
const { lectorV, updateLector } = require('../helpers/lector.validate');

// Controllers
const validateFunction = require('../controllers/validate.function');
const validateToken = require('../controllers/token.validate');
const confirmationToken = require('../controllers/token.confirmation');
const { getBooks, addBook, editBook, deleteBook,
        getLector, addLector, editLector, deleteLector } = require('../controllers/main.controller');

// Books
router.get('/get-books', getBooks)

router.post('/add-book', [validateToken, confirmationToken], validateFunction(BookV), addBook)

router.put('/edit-book/:id', [validateToken, confirmationToken], validateFunction(updateBook), editBook)

router.delete('/delete-book/:id', [validateToken, confirmationToken], deleteBook)

// Lector
router.post('/get-lector', [validateToken, confirmationToken], getLector)

router.post('/add-lector', [validateToken, confirmationToken], validateFunction(lectorV), addLector)

router.put('/edit-lector/:id', [validateToken, confirmationToken], validateFunction(updateLector), editLector)

router.delete('/delete-lector/:id', [validateToken, confirmationToken], deleteLector)


module.exports = router;