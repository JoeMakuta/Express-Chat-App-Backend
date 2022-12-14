
const conversationModel = require('../../models/conversation/conversation')

const getConversation = (req, res) => {
   conversationModel.find({
      members: { $in: [req.params.userId] }
   })
      .then((data) => {
         res.status(200).json({ conversation: data })
      })
      .catch((err) => {
         res.status(500).json({ message: err })
      })
}

module.exports = getConversation