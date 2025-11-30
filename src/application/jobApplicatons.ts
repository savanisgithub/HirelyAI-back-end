import { NextFunction, Request, Response } from "express";
import jobApplication from "../infrastructure/schemas/jobApplication";
import NotFoundError from "../domain/errors/not-found-error";
import { generateRating } from "./rating";

export const getJobApplications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { jobId } = req.query;
    if (jobId) {
      const jobApplications = await jobApplication.find({ job: jobId });
      return res.status(200).json(jobApplications);
    }

    const jobApplications = await jobApplication.find().populate("job").exec();
    return res.status(200).json(jobApplications);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

export const createJobApplications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobApplications = req.body;
    console.log(jobApplications);

    const createdJobApplication = await jobApplication.create(jobApplications);
    //call the method that updates the current job application with the rating
    generateRating(createdJobApplication._id);
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

export const getJobApplicationById = async (
  req: Request,
  res: Response,
) => {
  try {
    const jobApplications = await jobApplication.findById(req.params.id);

    if (jobApplications === null) {
      return res.status(404).send();
    }

    return res.status(200).json(jobApplications);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};
