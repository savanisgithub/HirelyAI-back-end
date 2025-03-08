import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../../domain/errors/forbidden-error";

const AuthorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.auth.claims.metadata.role !== "admin") {
    throw new ForbiddenError("Admin only route");
  }
  next();
};

export default AuthorizationMiddleware;
