import express from "express";
import morgan from "morgan";
import cors from "cors";
import monumentsRouter from "../monument/router/monumentsRouter.js";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound/handleEntpointNotFount.js";
import handleHealthCheck from "./middlewares/handleHealthStatus/handleHealthCheck.js";

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.get("/", handleHealthCheck);

app.use("/monuments", monumentsRouter);

app.use(handleEndpointNotFound);

export default app;
