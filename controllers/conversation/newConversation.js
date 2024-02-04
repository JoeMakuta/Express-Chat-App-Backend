import userModel from "../../models/authentification/authentificationSchema.js";
import conversationModel from "../../models/conversation/conversation.js";

const newConversation = async (req, res) => {
  try {
    let { users } = req.body;

    users = [...new Set(users)]; // Remove duplicates from the users
    if (users.length < 2) {
      res
        .status(403)
        .json({ message: "You can't have one user in a conversation." });
    } else {
      const sender = await userModel.find({
        $or: [{ _id: { $in: users } }],
      });

      if (sender[users.length - 1]) {
        const conversation1 = await conversationModel.findOne({
          members: { $in: users },
        });

        if (conversation1) {
          res.status(200).json(conversation1);
        } else {
          const newConversation = new conversationModel({
            members: users,
          });
          const data = await newConversation.save();
          res.status(200).json(data);
        }
      } else {
        res.status(404).json({ message: "Users not found!" });
      }
    }
    //Check if the users exists
  } catch (err) {
    res.status(403).json({ message: err.message, error: err.stack });
  }
};

export default newConversation;
