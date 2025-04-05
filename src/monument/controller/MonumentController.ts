import { Request, Response } from "express";
import { MonumentStructure } from "../types.js";
import { MonumentControllerStructure } from "./types.js";
import Monument from "../Monument.js";

class MonumentController implements MonumentControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  public getAllMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };

  public createMonument = (req: Request, res: Response) => {
    const { name, description, imageUrl, city, country } =
      req.body as MonumentStructure;

    const existingMonument = this.monuments.find(
      (monument) => monument.name === name,
    );

    if (existingMonument) {
      res.status(409).json({ error: "Monument already exists" });
    }

    const monument = new Monument(name, description, imageUrl, {
      city,
      country,
    });

    this.monuments.push(monument);

    res.status(201).json(monument);
  };
}

export default MonumentController;
