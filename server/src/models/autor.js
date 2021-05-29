const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Autor = sequelize.define('Autor', {
  id_autor: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.STRING
  },
  preferencia: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'autores',
  timestamps: false,
  createdAt: false
})

module.exports = Autor;