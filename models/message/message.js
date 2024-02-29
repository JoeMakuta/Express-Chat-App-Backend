import mongoose, { Schema } from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: { type: Schema.Types.ObjectId, ref: "userModel" },
    conversationId: { type: String },
    body: { type: String },
  },
  { collection: "Messages-Data", timestamps: true }
);

const messageModel = mongoose.model("messageModel", messageSchema);
export default messageModel;
