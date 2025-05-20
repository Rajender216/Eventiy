import express from "express";
import Event from "../models/event.js";
import { getAllEventsController } from "../controllers/eventControllers.js";

const eventRouter = express.Router();

eventRouter.get("/", getAllEventsController);

export default eventRouter;
