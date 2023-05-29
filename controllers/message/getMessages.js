import messageModel from "../../models/message/message.js";

const getMessages = (req, res) => {
  messageModel
    .find({
      $or: [{ senderId: req.auth.userId }, { receiverId: req.auth.userId }],
    })
    .then((data) => {
      res.status(200).json({ messages: data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not get messages!" + err });
    });
};

export default getMessages;
