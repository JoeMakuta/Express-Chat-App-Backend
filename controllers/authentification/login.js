const UserModel = require("../../models/authentification/authentificationSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const { PAYLOAD, TOKEN_EXPIRES_IN } = process.env;

const loginPage = (req, res) => {
  const { userEmail, passWord } = req.body;
  UserModel.findOne({ userEmail: userEmail })
    .then(async (user) => {
      if (!user) {
        res.status(404).json({ message: "User does not exist" });
      } else {
        console.log("The user : ", user);
        try {
          const valid = await bcrypt.compare(passWord, user.passWord);

          if (valid) {
            let token = jwt.sign({ userId: user._id }, PAYLOAD, {
              expiresIn: TOKEN_EXPIRES_IN,
            });
            res.status(200).json({
              status: 200,
              token,
              user,
              message: "Successfully logged in!",
            });
          } else {
            res.status(403).json({ status: 403, message: "Password Incorect" });
          }
        } catch (error) {
          res.status(403).json({
            status: 403,
            message: "User not Valid",
            error: error.stack,
          });
        }
      }
    })
    .catch((err) => {
      res.status(403).json({ status: 403, message: "Error server" });
    });
};

module.exports = loginPage;
