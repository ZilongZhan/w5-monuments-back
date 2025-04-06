import { Router } from "express";
import MonumentController from "../controller/MonumentController.js";
import monuments from "../data/monuments.js";

const monumentsRouter = Router();

const monumentController = new MonumentController(monuments);

monumentsRouter.get("/", monumentController.getAllMonuments);

monumentsRouter.post("/create", monumentController.createMonument);

export default monumentsRouter;
