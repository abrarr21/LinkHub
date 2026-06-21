import mongoose from "mongoose";
import env from "./config.js";
import { logger } from "./logger.js";

export const connectDB = async () => {
  await mongoose.connect(env.MONGODB_URI);
  logger.info("Connected to Mongodb");
};
