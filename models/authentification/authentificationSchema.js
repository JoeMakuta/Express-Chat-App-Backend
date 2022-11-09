const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
   userName: { type: String, required: true },
   userEmail: { type: String, required: true },
   passWord: { type: String, required: true },
})
const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;