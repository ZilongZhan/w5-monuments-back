import { Request, Response } from "express";

const handleHealthCheck = (_req: Request, res: Response) => {
  res.status(200).send("GÜINO");
};

export default handleHealthCheck;
