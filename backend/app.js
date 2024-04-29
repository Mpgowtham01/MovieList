import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  json({
    limit: "25MB",
  })
);

import movie from "./server/routes/MovieRouter.js";

app.use("/movielist", movie);

export default app;
