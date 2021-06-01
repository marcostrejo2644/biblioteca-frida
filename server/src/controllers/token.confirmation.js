const jwt = require('jsonwebtoken');
const Admin = require('../models/admin')

module.exports = async (req, res, next) => {
  try{
    const decoded = await jwt.verify(req.token, process.env.JWT_SECRET);
    const userdb = await Admin.findByPk(decoded.user.id_admin);
    if(userdb !== null && decoded.user.password === userdb.password){
      next();
    }else{
      res.status(422);
    }
  }catch (error){
    res.status(401).json({ message: 'Bad Token' });
    console.log(error);
  }

}