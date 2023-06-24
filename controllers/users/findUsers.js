import UserModel from "../../models/authentification/authentificationSchema.js";

const findUsers = async (req, res) => {
  try {
    const userId1 = req.body.userId;
    const userId2 = req.auth.userId;
    if (userId1 === userId2) {
      const users = await UserModel.find();
      if (users[0]) {
        res.status(200).json({ users });
      } else {
        res.status(404).json({ message: "No user" });
      }
    } else {
      res
        .status(401)
        .json({ message: "You are not authaurized to get users." });
    }
  } catch (err) {
    res.status(500).json({ message: "Could not get users", err: err.stack });
  }
};

export default findUsers;
