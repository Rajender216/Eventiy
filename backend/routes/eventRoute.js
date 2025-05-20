import express from "express";
import { getAllEventsController } from "../controllers/eventControllers.js";

const eventRouter = express.Router();

eventRouter.get("/", getAllEventsController);

export default eventRouter;
