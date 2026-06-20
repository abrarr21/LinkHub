import createApp from "./app.js";
import env from "./config/config.js";

const app = createApp();
const startServer = () => {
  try {
    app.listen(env.PORT, () => {
      console.log(`Server listening on port: ${env.PORT}`);
    });
  } catch (error) {
    console.log("error starting server", error);
  }
};

startServer();
