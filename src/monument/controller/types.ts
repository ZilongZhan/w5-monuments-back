import { Request, Response } from "express";

export interface MonumentControllerStructure {
  getAllMonuments: (req: Request, res: Response) => void;
}
