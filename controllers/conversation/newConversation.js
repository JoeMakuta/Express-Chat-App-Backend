const conversationModel = require('../../models/conversation/conversation')

const newConversation = (req, res) => {
   const newConversation = new conversationModel({
      members: [req.body.senderId, req.body.receiverId]
   })
   newConversation.save().then(
      (data) => { res.status(200).json(data) }
   ).catch(() => {
      res.status(403).json({ message: 'Could not save data' })
   })
}

module.exports = newConversation