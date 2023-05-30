import mongoose from "mongoose";
import messageModel from "../../models/message/message.js";

const newMessage = (req, res) => {
  const newMessage = new messageModel({
    senderId: req.auth.userId,
    receiverId: req.params.receiverId,
    message: req.body.message,
  });
  newMessage
    .save()
    .then((data) => {
      res.status(200).json({ message: "Message sent" });
    })
    .catch(() => {
      res.status(500).json({ message: "Could not send message !" });
    });
};

export default newMessage;
