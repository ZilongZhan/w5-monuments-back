import express from "express";
import MonumentController from "../monument/controller/MonumentController.js";
import { monuments } from "../monument/data/monuments.js";

const app = express();

const foo = new MonumentController(monuments);

app.get("/", foo.getAllMonuments);

export default app;
