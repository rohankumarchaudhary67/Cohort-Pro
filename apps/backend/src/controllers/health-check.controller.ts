import { Request, Response, NextFunction } from "express";

const healthcheck =
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Okk" });
  }

export { healthcheck };
