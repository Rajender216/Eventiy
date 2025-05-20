import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  date: String,
  location: String,
  description: String,
  originalUrl: String,
  source: String,
  imageUrl: String,
});

export default mongoose.model("Event", eventSchema);
