import UserModel from "../../models/authentification/authentificationSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { PAYLOAD, TOKEN_EXPIRES_IN } = process.env;

const loginPage = (req, res) => {
  const { userEmail, passWord } = req.body;

  UserModel.findOne({ userEmail: userEmail })
    .then(async (user) => {
      if (!user) {
        res
          .status(404)
          .json({ status: 404, message: "Incorrect Email or Password!" });
      } else {
        try {
          const valid = await bcrypt.compare(passWord, user.passWord);

          if (valid) {
            let token = jwt.sign({ userId: user._id }, PAYLOAD, {
              expiresIn: TOKEN_EXPIRES_IN,
            });
            res.status(200).json({
              status: 200,
              message: "Successfully logged in!",
              token,
              user,
            });
          } else {
            res
              .status(403)
              .json({ status: 403, message: "Incorrect Email or Password!" });
          }
        } catch (error) {
          res.status(403).json({
            status: 403,
            message: "Incorrect Email or Password!",
            error: error.stack,
          });
        }
      }
    })
    .catch((err) => {
      res
        .status(403)
        .json({ status: 403, message: "Error server", err: err.stack });
    });
};

export default loginPage;
