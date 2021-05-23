const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('libreria_frida', 'root', '54chafido',{
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;