import mongoose, { Schema } from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    members: [{ type: Schema.Types.ObjectId, ref: "userModel" }],
  },
  { collection: "Conversations-Data", timestamps: true }
);

const conversationModel = mongoose.model(
  "conversationModel",
  conversationSchema
);
export default conversationModel;
