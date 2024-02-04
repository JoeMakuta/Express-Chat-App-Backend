import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: { type: String },
    conversationId: { type: String },
    body: { type: String },
  },
  { collection: "Messages-Data", timestamps: true }
);

const messageModel = mongoose.model("messageModel", messageSchema);
export default messageModel;
