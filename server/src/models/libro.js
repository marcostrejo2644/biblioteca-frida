const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Libro = sequelize.define('Libro',{
  id_libro: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idioma: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  pagina: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  editorial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_lanzamiento:{
    type: DataTypes.NUMBER,
    allowNull: false
  },
  reservado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  img: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  tableName: 'libros',
  timestamps: false,
  createdAt: false
});

module.exports = Libro;