import mongoose from "mongoose";
import messageModel from "../../models/message/message.js";
import conversationModel from "../../models/conversation/conversation.js";

const newMessage = async (req, res) => {
  const { conversationId } = req.params;
  const { userId } = req.auth;
  const { body } = req.body;

  try {
    // Check if the conversation exists
    const conversation = await conversationModel.findOne({
      _id: conversationId,
    });

    if (conversation) {
      //Save the message
      const newMessage = new messageModel({
        senderId: userId,
        conversationId: conversationId,
        body,
      });
      newMessage.save();
      res.status(200).json({ message: "Message sent" });
    } else {
      res.status(404).json({ message: "Conversation Not Found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.stack });
  }
};

export default newMessage;
