import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: { type: String },
    receiverId: { type: String },
    message: { type: String },
  },
  { collection: "Messages-Data" }
);

const messageModel = mongoose.model("messageModel", messageSchema);
export default messageModel;
