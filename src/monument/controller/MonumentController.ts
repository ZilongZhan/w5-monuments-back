import { Request, Response } from "express";
import { MonumentData, MonumentStructure } from "../types.js";
import { MonumentControllerStructure } from "./types.js";
import Monument from "../Monument.js";

class MonumentController implements MonumentControllerStructure {
  constructor(private monuments: MonumentStructure[]) {}

  public getAllMonuments = (_req: Request, res: Response): void => {
    res.status(200).json({ monuments: this.monuments });
  };

  public createMonument = (req: Request, res: Response): void => {
    const { name, description, imageUrl, city, country } =
      req.body as MonumentData;

    const monumentExists = this.monuments.some(
      (monument) => monument.name === name,
    );

    if (monumentExists) {
      res.status(409).json({ error: "Monument already exists" });
      return;
    }

    const monument = new Monument({
      name,
      description,
      imageUrl,
      city,
      country,
    });

    this.monuments.push(monument);

    res.status(201).json(monument);
  };

  public deleteMonumentById = (req: Request, res: Response): void => {
    const monumentId = req.params.monumentId;

    const monumentExists = this.monuments.some(
      (monument) => monument.id === monumentId,
    );

    if (!monumentExists) {
      res.status(404).json({ error: "Monument doesn't exist" });
      return;
    }

    const monumentPosition = this.monuments.findIndex(
      (monument) => monument.id === monumentId,
    );

    this.monuments.splice(monumentPosition, 1);
    res.status(200).json({ message: "Monument deleted successfully" });
  };
}

export default MonumentController;
