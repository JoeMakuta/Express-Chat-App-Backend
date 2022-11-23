const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
   userName: { type: String, required: true },
   userEmail: { type: String, required: true, unique: true },
   passWord: { type: String, required: true },
   image: { type: String, required: true, default: 'https://api.lorem.space/image/face?w=150&h=150' },
}, { collection: 'User-Data' })
const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel; 