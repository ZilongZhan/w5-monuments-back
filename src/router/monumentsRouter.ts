import { Router } from "express";
import MonumentController from "../monument/controller/MonumentController.js";
import { monuments } from "../monument/data/monuments.js";

const monumentsRouter = Router();

const monumentController = new MonumentController(monuments);

monumentsRouter.get("/", monumentController.getAllMonuments);

export default monumentsRouter;
