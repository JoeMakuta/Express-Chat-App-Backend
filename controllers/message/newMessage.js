const mongoose = require('mongoose')
const messageModel = require('../../models/message/message')

const newMessage = (req, res) => {
   const newMessage = new messageModel({
      conversationId: req.body.conversationId,
      senderId: req.body.senderId,
      message: req.body.message,
   })
   newMessage.save().then((data) => {
      res.status(200).json({ message: 'Message sent' })
   }).catch(() => {
      res.status(500).json({ message: "Could not send message !" })
   })
}

module.exports = newMessage