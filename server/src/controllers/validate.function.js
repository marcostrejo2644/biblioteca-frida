module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      if(error.isJoi == true){
        res.status(422).send(error);
      }else{
        res.send(error);
      }
    }
  };
};
