import UserModel from "../../models/authentification/authentificationSchema.js";

const findUsers = (req, res) => {
  const userId1 = req.body.userId;
  const userId2 = req.auth.userId;
  if (userId1 === userId2) {
    UserModel.find()
      .then((users) => {
        res.status(200).json({ users });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Could not get users", err: err.stack });
      });
  } else {
    res.status(401).json({ message: "You are not authaurized to get users." });
  }
};

export default findUsers;
