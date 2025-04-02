import { Router } from "express";
import MonumentController from "../controller/MonumentController.js";
import monuments from "../data/monuments.js";
import handleEndpointNotFound from "../../server/middlewares/handleEndpointNotFound/handleEntpointNotFount.js";

const monumentsRouter = Router();

const monumentController = new MonumentController(monuments);

monumentsRouter.get("/", monumentController.getAllMonuments);
monumentsRouter.use(handleEndpointNotFound);

export default monumentsRouter;
