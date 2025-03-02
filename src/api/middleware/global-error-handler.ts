import { NextFunction, Request, Response } from "express";

const GlobalErrorHandlerMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (error.name) {
    case "NotFoundError":
      console.log(error);
      return res
        .status(404)
        .json({ message: error.message.replaceAll("\n", "") });
      break;

    case "ValidationError":
      console.log(error);
      return res
        .status(400)
        .json({ message: error.message.replaceAll("\n", "") });
      break;

    case "UnauthorizedError":
      console.log(error);
      return res.status(401).json({ message: error.message });
      break;

    case "ForbiddenError":
      console.log(error);
      return res.status(401).json({ message: error.message });
      break;

    default:
      console.log(error);
      return res.status(500).json({ message: error.message });
      break;
  }
};

export default GlobalErrorHandlerMiddleware;
