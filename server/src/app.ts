import express from "express";
import type { Express } from "express";
import env from "./config/config.js";
import morgan from "morgan";

const createApp = () => {
  const app: Express = express();

  if (env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  return app;
};

export default createApp;
