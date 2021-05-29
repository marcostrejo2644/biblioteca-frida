const path = require('path');
const express = require('express');

// Initialize
const app = express();
app.set('port', process.env.PORT || 8000)


// Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/', require(path.join(__dirname, 'routes', 'admins')))
app.use('/api/', require(path.join(__dirname, 'routes', 'books')))

// Listen
app.listen(app.get('port'), () => {
  console.log(`Server on port http://localhost:${app.get('port')}`);
})