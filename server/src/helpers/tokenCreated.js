const jwt = require('jsonwebtoken');

module.exports = async (res, user) =>  {
  const token = await jwt.sign({ user }, process.env.JWT_SECRET);
  return res.status(200).json({ token })
}