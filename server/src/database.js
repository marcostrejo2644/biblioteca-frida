const { Sequelize } = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize('libreria_frida', process.env.DB_USER, process.env.DB_PASSWORD,{
  host: 'localhost',
  dialect: process.env.DB_DIALECT
});


module.exports = sequelize;