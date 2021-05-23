const express = require('express');
const sequelize = require('./database')
const sequelizeTest = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    co2nsole.error('Unable to connect to the database:', error);
  }
}


// Initialize
const app = express();
app.set('port', process.env.PORT || 8000)
sequelizeTest();


// Middelware

// Listen
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})