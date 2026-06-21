import express from "express";
import type { Express } from "express";
import env from "./config/config.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";

const createApp = () => {
  const app: Express = express();

  app.use(express.json());
  app.use(cookieParser());

  if (env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.get("/health", (_req, res) => {
    res.send("Server running perfectly");
  });

  app.use(errorHandler);

  return app;
};

export default createApp;
