const mainControllers = {}
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Models Export
const Admin = require('../models/admin');
const Book = require('../models/libro');
const Libros_escritos_autores = require('../models/libros_escritos_autores');
const Lector = require('../models/lector');
const Reserva = require('../models/reserva');

/* 
  [1] Book Section 
*/
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
    const { nombre, idioma, pagina, editorial, categoria, fecha_lanzamiento, reservado, img = null, id_autor } = req.body;
    const book = await Book.create({nombre, idioma, pagina, editorial, categoria, fecha_lanzamiento, reservado, img});
    const Libros_escritos_autores = await Libros_escritos_autores.create({
      id_libro: book.id_libro,
      id_autor
    })
    res.status(200).json({ message: 'libro guardado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(422)
  }
};

mainControllers.editBook = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(422)
  }
}

mainControllers.deleteBook = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(422).json({ message: 'data incorrecta' })
    console.log(error);
  }
}

/* 
  [2] Lector Section 
*/
mainControllers.getLector = async (req,res) => {
  try {
    const lectores = await Lector.findAll();
    res.status(200).json({ lectores })
  } catch (error) {
    console.log(error)
  }
}

mainControllers.addLector = async (req, res) => {
  try {
    const { nombre, apellido, dni = null, mail, telefono = null } = req.body;
    const lector = await Lector.create({ nombre, apellido, dni, mail, telefono });
    res.status(200).json({ message: 'Usuario agregado correctamente' });
  } catch (error) {
    res.status(422).json({ message: 'data incorrecta' })
    console.log(error);
  }
}

mainControllers.editLector = async (req, res) => {
  try {
    const id_lector = req.params.id;
    const { nombre, apellido, dni = null, mail, telefono = null } = req.body;
    await Lector.update({nombre, apellido, dni, mail, telefono},{
      where: {
        id_lector
      }
    })
    res.status(200).json({ message: 'Lector actualizado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(422)
  }
}

mainControllers.deleteLector = async (req, res) => {
  try {
    const id_lector = req.params.id;

    await Lector.destroy({
      where: {
        id_lector
      }
    });
    res.status(200).json({ message: 'Lector eliminado correctamente' });
  } catch (error) {
    res.status(422).json({ message: 'data incorrecta' })
    console.log(error);
  }
}

/* 
  [3] Reservation Secition
*/
mainControllers.addReservation = async (req, res) => {
  try {
    const { id_lector, id_libro, fecha_salida } = req.body
    await Reserva.create({id_lector, id_libro, fecha_salida})
    res.status(200).json({ message: 'Reserva creada con exito' })
  } catch (error) {
    res.status(422);
    console.log(error);
  }
}

mainControllers.endReservation = async (req, res) => {
  try {
    const { id_reserva, fecha_ingreso } = req.body
    await Reserva.update({fecha_ingreso}, {
      where: {
        id_reserva
      }
    });
    res.status(200).json({ message: 'Reserva finalizada con exito' })
  } catch (error) {
    res.status(422);
    console.log(error);
  }
}

module.exports = mainControllers;