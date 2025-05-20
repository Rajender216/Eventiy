import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import eventRoutes from "./routes/eventRoute.js";
import fetchEventsAndSaveToDB from "./scraper/scraper.js";
import connectDB from "./config/db.js";
import cron from "node-cron";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);

connectDB();

// Schedule scraper every 12 hours
cron.schedule("0 */12 * * *", () => {
  fetchEventsAndSaveToDB();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});