const UserModel = require("../../models/authentification/authentificationSchema");
const cryptPassword = require('./cryptPassword')

const signUp = async (req, res) => {
   const { userName, userEmail, passWord } = req.body

   if (!userName || !userEmail || !passWord) {
      res.status(400).json({ message: "Fill the fields ..." })
   }
   else {
      // console.log('The password is ', passWord);
      const cryptedPassword = await cryptPassword(passWord);
      // console.log('The crypted password is ', cryptedPassword);

      UserModel.findOne({ userEmail: req.body.userEmail })
         .then(user => {
            if (user) {
               res.status(403).json({ status: 403, message: 'Email used' })
            } else {
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
                     res.status(400).json({
                        message: "Did not save data",
                        error: err
                     })
                  })
            }
         })



   }

}

module.exports = signUp;