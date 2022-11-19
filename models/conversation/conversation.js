

const mongoose = require("mongoose")

const conversationSchema = mongoose.Schema({
   members: { type: Array },
}, { collection: 'Conversations-Data' })

const conversationModel = mongoose.model('conversationModel', conversationSchema);
module.exports = conversationModel; 