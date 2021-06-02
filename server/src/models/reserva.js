const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Reserva = sequelize.define('Reserva', {
  id_reserva: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    unique: true
  },
  id_libro: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references: {
      model: 'libro',
      key: 'id_libro'
    }
  },
  id_lector: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references: {
      model: 'lector',
      key: 'id_lector'
    }
  },
  fecha_salida: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_ingreso: {
    type: DataTypes.DATEONLY
  }
}, {
  tableName: 'reservas',
  timestamps: false,
  createdAt: false
})

module.exports = Reserva;