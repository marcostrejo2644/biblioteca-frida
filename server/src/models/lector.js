const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Lector = sequelize.define('Lector', {
  id_lector: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.NUMBER,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.NUMBER,
  }
}, {
  tableName: 'lectores',
  timestamps: false,
  createdAt: false
});

module.exports = Lector