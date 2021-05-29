const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Libros_escritos_autores = sequelize.define('Libros_escritos_autores', {
  id_libro: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references: {
      model: 'libro',
      key: 'id_libro'
    }
  },
  id_autor: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references: {
      model: 'autor',
      key: 'id_autor'
    }
  }
}, {
  tableName: 'libros_escritos_autores',
  timestamps: false,
  createdAt: false,
});

Libros_escritos_autores.removeAttribute('id');

module.exports = Libros_escritos_autores;