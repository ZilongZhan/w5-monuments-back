import { Request, Response } from "express";

export interface MonumentControllerStructure {
  getAllMonuments: (req: Request, res: Response) => void;
  createMonument: (req: Request, res: Response) => void;
  deleteMonumentById: (req: Request, res: Response) => void;
}
