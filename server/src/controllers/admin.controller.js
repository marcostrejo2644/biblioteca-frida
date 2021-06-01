const adminController = {}
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin');
const tokenCreated = require('../helpers/tokenCreated')
require('dotenv').config()

// Add Admin
adminController.addAdmin = async (req, res) => {
  try{
    let { username, email, password } = req.body;
    const verifyEmail = await Admin.findOne({ where: { email }} );
    const verifyUsername = await Admin.findOne({ where: { username }} );
    if(verifyUsername !== null) return res.status(409).json({ message: 'Usuario actualmente en uso o no existe' })
    if(verifyEmail !== null) return res.status(409).json({ message: 'Email actualmente en uso o no existe' })
    const admin = Admin.build({username, email, password});
    admin.password = await admin.encryptPassword(password); 
    // await admin.save();
    res.status(200).json({
      message: 'Admin agregado correctamente',
    });
  }catch (error){
    res.send(error)
  }
};

// Login Admin
adminController.logIn = async (req, res) => {
  try {
    const { username = null, email = null, password } = req.body;
    const verifyUsername = await Admin.findOne({ where: { username }});
    const verifyEmail = await Admin.findOne({ where: { email }} );
    if(verifyUsername !== null && await verifyUsername.comparePassword(password) === true){
      return tokenCreated(res, verifyUsername);
    }else if(verifyEmail !== null && await verifyEmail.comparePassword(password) === true){
      return tokenCreated(res, verifyEmail);
    }else{
      res.status(422).json({
        message: 'Datos enviados incorrectos'
      })
    }
  } catch (error) {
    res.send(error)
  }
};

// Verify Token
adminController.verifyToken = async (req, res) => {
  const decoded = await jwt.verify(req.token, process.env.JWT_SECRET);
  const userdb = await Admin.findByPk(decoded.user.id_admin);
  if(userdb !== null && decoded.user.password === userdb.password){
    res.status(200);
  }else{
    res.status(401);
  }

}

module.exports = adminController;