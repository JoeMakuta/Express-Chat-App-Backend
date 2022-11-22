const jwt = require('jsonwebtoken')

const tokenAuth = (req, res, next) => {
   try {
      const sentToken = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(sentToken, 'RANDOM_WEB_TOKEN');
      const userId = decodedToken.userId
      req.auth = {
         userId: userId
      }
      next()
   } catch (err) {

   }
}

module.exports = tokenAuth