import express from "express";
import {
  createJobApplications,
  getJobApplicationById,
  getJobApplications,
} from "../application/jobApplicatons";

const jobApplicationRouter = express.Router();

jobApplicationRouter
  .route("/")
  .post(createJobApplications)
  .get(getJobApplications);
jobApplicationRouter.route("/:id").get(getJobApplicationById);

export default jobApplicationRouter;
