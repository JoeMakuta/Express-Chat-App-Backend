import userModel from "../../models/authentification/authentificationSchema.js";
import conversationModel from "../../models/conversation/conversation.js";

const newConversation = async (req, res) => {
  let { users } = req.body;

  users = [...new Set(users)]; // Remove duplicates from the users

  //Check if the users exists

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
      try {
        const newConversation = new conversationModel({
          members: users,
        });
        const data = await newConversation.save();
        res.status(200).json(data);
      } catch (err) {
        res.status(403).json({ message: "Could not save data" });
      }
    }
  } else {
    res.status(404).json({ message: "Users not found!" });
  }
};

export default newConversation;
