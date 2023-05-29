import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    dateOfBirth: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    passWord: { type: String, required: true },
    image: {
      type: String,
      required: true,
      default: "https://api.lorem.space/image/face?w=150&h=150",
    },
  },
  { collection: "User-Data", timestamps: true }
);

const userModel = mongoose.model("userModel", userSchema);
export default userModel;
