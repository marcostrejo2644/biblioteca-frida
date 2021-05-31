const mainControllers = {}
const Book = require('../models/libro');


mainControllers.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.status(200).json({ books })
};

mainControllers.addBook = async (req, res) => {
  
};

module.exports = mainControllers;