import UserModel from "../../models/authentification/authentificationSchema.js";
import cryptPassword from "./cryptPassword.js";

const signUp = async (req, res) => {
  const { fName, lName, dateOfBirth, userName, userEmail, passWord } = req.body;

  if (!userName || !userEmail || !passWord) {
    res.status(400).json({ message: "Fill in the required fields ..." });
  } else {
    const cryptedPassword = await cryptPassword(passWord);
    UserModel.findOne({ $or: [{ userEmail }, { userName }] }).then((user) => {
      if (user) {
        res.status(403).json({ status: 403, message: "Credentials used !" });
      } else {
        const user = new UserModel({
          fName,
          lName,
          dateOfBirth,
          userName,
          userEmail,
          passWord: cryptedPassword,
        });
        user
          .save()
          .then((data) => {
            res.status(200).json({
              message: "Data saved success !",
              data: data,
            });
          })
          .catch((err) => {
            res.status(400).json({
              message: "Could not save data !",
              error: err?.message,
            });
          });
      }
    });
  }
};

export default signUp;
