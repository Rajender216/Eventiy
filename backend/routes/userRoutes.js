import express from "express";
import { addUserEmail } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.post("/save-email", addUserEmail);

export default userRouter;
