import { pino } from "pino";
import env from "./config.js";

const isProduction = env.NODE_ENV === "production";

export const logger = pino({
  level: env.PINO_LOG_LEVEL || (isProduction ? "info" : "debug"),

  ...(!isProduction && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    },
  }),
});
