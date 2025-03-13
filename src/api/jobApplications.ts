import express from "express";
import {
  createJobApplications,
  getJobApplicationById,
  getJobApplications,
} from "../application/jobApplicatons";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import AuthorizationMiddleware from "./middleware/authorization-middleware";

const jobApplicationRouter = express.Router();

jobApplicationRouter
  .route("/")
  .post(ClerkExpressRequireAuth({}), createJobApplications)
  .get(
    ClerkExpressRequireAuth({}),
    AuthorizationMiddleware,
    getJobApplications
  );
jobApplicationRouter
  .route("/:id")
  .get(
    ClerkExpressRequireAuth({}),
    AuthorizationMiddleware,
    getJobApplicationById
  );

export default jobApplicationRouter;
