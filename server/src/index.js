const path = require('path');
const express = require('express');
const sequelize = require('./database');
require('./association')

// Initialize
const app = express();
app.set('port', process.env.PORT || 8000)


// Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/', require(path.join(__dirname, 'routes', 'admins')))
app.use('/api/', require(path.join(__dirname, 'routes', 'main')))

// Listen
app.listen(app.get('port'), () => {
  console.log(`Server on port http://localhost:${app.get('port')}`);

  // Database
  sequelize.authenticate().then(() => console.log(`Connection succesfully`)).catch(error => console.log(error))

})