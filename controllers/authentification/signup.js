const UserModel = require("../../models/authentification/authentificationSchema");
// const bcrypt = require('bcryptjs')

const signUp = (req, res) => {
   const user = new UserModel({
      "userName": req.body.userName,
      "userEmail": req.body.userEmail,
      "passWord": req.body.passWord,
   })
   user.save()
      .then(() => {
         res.status(200).json({ message: "Data saved success" })
      })
      .catch((err) => {
         console.log("Did not save data" + err)
         res.json({ message: "Did not save data" })
      })
}

module.exports = signUp;