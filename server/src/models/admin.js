const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const bcrypt = require('bcryptjs');


const Admin = sequelize.define('Admin', {
  id_admin: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    unique: true
  },
  username:{
    type:  DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'admins',
  timestamps: false,
  createdAt: false
});

Admin.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

Admin.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = Admin;