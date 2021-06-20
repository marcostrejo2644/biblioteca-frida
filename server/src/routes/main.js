const router = require('express').Router();
const { BookV, updateBook } = require('../helpers/book.validate');
const { lectorV, updateLector } = require('../helpers/lector.validate');

// Controllers
const validateFunction = require('../controllers/validate.function');
const validateToken = require('../controllers/token.validate');
const confirmationToken = require('../controllers/token.confirmation');
const { getBooks, addBook, editBook, deleteBook, getBook,
        getLectors, getLector, addLector, editLector, deleteLector,
        addReservation, endReservation, getReservations, getReservation } = require('../controllers/main.controller');

// Books
router.get('/get-books', getBooks)

router.get('/get-book/:id', getBook)

router.post('/add-book', [validateToken, confirmationToken], validateFunction(BookV), addBook)

router.put('/edit-book/:id', [validateToken, confirmationToken], validateFunction(updateBook), editBook)

router.delete('/delete-book/:id', [validateToken, confirmationToken], deleteBook)

// Lector
router.post('/get-lectors', [validateToken, confirmationToken], getLectors)

router.post('/get-lector/:id', [validateToken, confirmationToken], getLector)

router.post('/add-lector', [validateToken, confirmationToken], validateFunction(lectorV), addLector)

router.put('/edit-lector/:id', [validateToken, confirmationToken], validateFunction(updateLector), editLector)

router.delete('/delete-lector/:id', [validateToken, confirmationToken], deleteLector)

// Reservation
router.post('/get-reservations', [validateToken, confirmationToken], getReservations)

router.post('/get-reservation/:id', [validateToken, confirmationToken], getReservation)

router.post('/add-reservation', [validateToken, confirmationToken], addReservation)

router.post('/end-reservation', [validateToken, confirmationToken], endReservation)


module.exports = router;