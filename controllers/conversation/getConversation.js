import conversationModel from "../../models/conversation/conversation.js";

const getConversation = async (req, res) => {
  try {
    const conversations = await conversationModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json({ conversations });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default getConversation;
