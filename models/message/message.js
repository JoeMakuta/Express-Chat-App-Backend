
const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
   conversationId: { type: String },
   senderId: { type: String },
   message: { type: String }
}, { collection: 'Messages-Data' })

const messageModel = mongoose.model('messageModel', messageSchema);
module.exports = messageModel;