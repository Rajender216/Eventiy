import mongoose from "mongoose";
const userEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserEmail = mongoose.model("UserEmail", userEmailSchema);
export default UserEmail;