import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    members: { type: Array },
  },
  { collection: "Conversations-Data", timestamps: true }
);

const conversationModel = mongoose.model(
  "conversationModel",
  conversationSchema
);
export default conversationModel;
