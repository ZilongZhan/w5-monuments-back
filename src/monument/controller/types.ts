import { Request, Response } from "express";

interface MonumentControllerStructure {
  getAllMonuments: (req: Request, res: Response) => void;
}

export default MonumentControllerStructure;
