import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";
import globaErrorHandler from "./middlewares/error-handler.js";
import { PORT } from "./config/server-config.js";
import { connectDB } from "./config/db.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", apiRoutes);
app.use(globaErrorHandler);

app.listen(PORT, async () => {
  console.log(`Server started at PORT ${PORT}`);
  try {
    await connectDB();
  } catch (error) {
    process.exit(1);
  }
});
