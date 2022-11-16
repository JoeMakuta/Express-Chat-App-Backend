const jwt = require('jsonwebtoken')

const generateToken = (userId, expiresIn) => {
   let token = jwt.sign(
      userId,
      'RANDOM_WEB_TOKEN',
      expiresIn
   )
   return token
}

module.exports = generateToken