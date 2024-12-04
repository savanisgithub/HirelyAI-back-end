import express from "express";
import { createJobs, deleteJob, getAlljobs, getJobById, updateJob } from "../application/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getAlljobs).post(createJobs);
jobsRouter.route("/:id").get(getJobById).delete(deleteJob).put(updateJob);


export default jobsRouter;