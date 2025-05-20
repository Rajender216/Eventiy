import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String,
  description: String,
  originalUrl: String,
  source: String,
  imageUrl: String,
});

export default mongoose.model("Event", eventSchema);
