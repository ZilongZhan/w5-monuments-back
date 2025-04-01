import express from "express";
import startServer from "./server/startServer.js";

const app = express();
export default app;

const port = 3001;
startServer(port);
