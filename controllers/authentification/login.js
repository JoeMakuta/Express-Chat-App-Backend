const UserModel = require('../../models/authentification/authentificationSchema')
const bcrypt = require('bcrypt')
const generateToken = require('./generateToken')

const loginPage = (req, res) => {
   const { userEmail, passWord } = req.body
   UserModel.findOne({ userEmail: req.body.userEmail })
      .then(user => {
         if (!user) {
            res.json({ message: 'User does not exist' })
         } else {
            bcrypt.compare(req.body.passWord, user.passWord)
               .then(valid => {
                  if (valid) {
                     let token = generateToken(
                        {
                           userId: user._id
                        },
                        {
                           expiresIn: '24h'
                        }
                     )
                     res.status(200).json({ status: 200, token: token, message: 'Successfully logged in!' })
                  } else {
                     res.status(403).json({ status: 403, message: 'Password Incorect' })
                  }
               }).catch(() => {
                  res.status(403).json({ status: 403, message: 'User not Valid' })
               })
         }
      }).catch((err) => {
         res.status(403).json({ status: 403, message: 'Error server' })
      })
}

module.exports = loginPage;