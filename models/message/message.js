
const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
   conversationId: { type: String },
   senderId: { type: String },
   message: { type: String }
}, { collecetion: 'Messages-Data' })

const messageModel = mongoose.model('messageModel', messageSchema);
module.exports = messageModel;