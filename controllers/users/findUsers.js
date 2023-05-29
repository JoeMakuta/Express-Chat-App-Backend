import UserModel from "../../models/authentification/authentificationSchema.js";

const findUsers = (req, res, next) => {
  UserModel.find()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch(() => {
      res.status(500).json({ message: "Could not get users" });
    });
};

export default findUsers;
