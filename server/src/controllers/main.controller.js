const mainControllers = {}
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin');
const Book = require('../models/libro');
const Libros_escritos_autores = require('../models/libros_escritos_autores');
require('dotenv').config()

mainControllers.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ books })
  } catch (error) {
    console.log(error)
  }

};

mainControllers.addBook = async (req, res) => {
  try {
    const decoded = await jwt.verify(req.token, process.env.JWT_SECRET);
    const userdb = await Admin.findByPk(decoded.user.id_admin);
    if(userdb !== null && decoded.user.password === userdb.password){
      const { nombre, idioma, pagina, editorial, categoria, fecha_lanzamiento, reservado, img = null, id_autor } = req.body;
      const book = await Book.create({nombre, idioma, pagina, editorial, categoria, fecha_lanzamiento, reservado, img});
      const Libros_escritos_autores = await Libros_escritos_autores.create({
        id_libro: book.id_libro,
        id_autor
      })
      res.status(200).json({ message: 'libro guardado correctamente' });
    }else{
      res.status(422)
    }
  } catch (error) {
    console.log(error);
    res.status(422)
  }
};

mainControllers.editBook = async (req, res) => {
  try {
    const decoded = await jwt.verify(req.token, process.env.JWT_SECRET);
    const userdb = await Admin.findByPk(decoded.user.id_admin);
    if(userdb !== null && decoded.user.password === userdb.password){
      const id_libro = req.params.id;
      const { nombre, idioma, pagina, editorial, categoria, fecha_lanzamiento, reservado, img = null, id_autor} = req.body;
      await Book.update({nombre, idioma, pagina, editorial, categoria, fecha_lanzamiento, reservado, img},{
        where: {
          id_libro
        }
      })
      await Libros_escritos_autores.update({id_autor}, {
        where:{
          id_libro
        }
      })
      res.status(200).json({ message: 'libro actualizado correctamente' });
    }else{
      res.status(422)
    }
  } catch (error) {
    console.log(error);
    res.status(422)
  }
}

mainControllers.deleteBook = async (req, res) => {
    const decoded = await jwt.verify(req.token, process.env.JWT_SECRET);
    const userdb = await Admin.findByPk(decoded.user.id_admin);
    if(userdb !== null && decoded.user.password === userdb.password){
      const { id_autor } = req.body
      const id_libro = req.params.id;
      
      await Libros_escritos_autores.destroy({
        where:{
          id_libro,
          id_autor
        }
      })
      
      await Book.destroy({
        where: {
          id_libro
        }
      });
     
      res.status(200).json({ message: 'libro eliminado correctamente' });
    }else{
      res.status(422)
    }
}

module.exports = mainControllers;