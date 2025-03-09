import express from "express";
import {
  createJobs,
  deleteJob,
  getAlljobs,
  getJobById,
  updateJob,
} from "../application/jobs";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import AuthorizationMiddleware from "./middleware/authorization-middleware";

const jobsRouter = express.Router();

jobsRouter
  .route("/")
  .get(getAlljobs)
  .post(ClerkExpressRequireAuth({}), AuthorizationMiddleware, createJobs);
jobsRouter
  .route("/:id")
  .get(ClerkExpressRequireAuth({}), getJobById)
  .delete(deleteJob)
  .put(updateJob);

export default jobsRouter;
