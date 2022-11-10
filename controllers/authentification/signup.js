const UserModel = require("../../models/authentification/authentificationSchema");
const cryptPassword = require('./cryptPassword')

const signUp = (req, res) => {
   const { userName, userEmail, passWord } = req.body

   if (!userName || !userEmail || !passWord) {
      res.status(400).json({ message: "Fill the fields ..." })
   } else {
      const cryptedPassword = cryptPassword(passWord);
      const user = new UserModel({
         "userName": userName,
         "userEmail": userEmail,
         "passWord": cryptedPassword,
      })
      user.save()
         .then((data) => {
            res.status(200).json({
               message: "Data saved success",
               data: data
            })
         })
         .catch((err) => {
            res.json({
               message: "Did not save data",
               error: err
            })
         })

   }

}

module.exports = signUp;