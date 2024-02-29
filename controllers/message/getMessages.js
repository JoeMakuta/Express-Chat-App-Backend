import conversationModel from "../../models/conversation/conversation.js";
import messageModel from "../../models/message/message.js";

const getMessages = async (req, res) => {
  const { conversationId } = req.params;
  try {
    const conversation = await conversationModel.findOne({
      _id: conversationId,
    });
    if (conversation) {
      const messages = await messageModel
        .find({ conversationId })
        .populate("senderId", "-passWord");
      if (messages) {
        res.status(200).json({ messages });
      }
    } else {
      res.status(404).json({ message: "Conversation not found !" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not get messages!", error: error.message });
  }
};

export default getMessages;
