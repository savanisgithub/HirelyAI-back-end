import express from "express";
import {
  createJobs,
  deleteJob,
  getAlljobs,
  getJobById,
  updateJob,
} from "../application/jobs";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const jobsRouter = express.Router();

jobsRouter
  .route("/")
  .get(getAlljobs)
  .post(ClerkExpressRequireAuth({}), createJobs);
jobsRouter
  .route("/:id")
  .get(ClerkExpressRequireAuth({}), getJobById)
  .delete(deleteJob)
  .put(updateJob);

export default jobsRouter;
