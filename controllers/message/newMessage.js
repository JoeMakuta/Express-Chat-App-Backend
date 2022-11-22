const mongoose = require('mongoose')
const messageModel = require('../../models/message/message')
const io = require('../../server')

const newMessage = (req, res) => {
   const newMessage = new messageModel({
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      message: req.body.message,
   })
   newMessage.save().then((data) => {
      // io.emit('newMessage', { action: 'message', message: data })
      res.status(200).json({ message: 'Message sent' })
   }).catch(() => {
      res.status(500).json({ message: "Could not send message !" })
   })
}

module.exports = newMessage