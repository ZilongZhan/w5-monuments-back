import { Request, Response } from "express";

const handleHealthCheck = (_req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
};

export default handleHealthCheck;
