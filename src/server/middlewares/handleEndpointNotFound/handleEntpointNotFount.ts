import { Request, Response } from "express";

const handleEndpointNotFound = (_req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export default handleEndpointNotFound;
