import { NextFunction, Request, Response } from "express";
import jobApplication from "../infrastructure/schemas/jobApplication";
import NotFoundError from "../domain/errors/not-found-error";

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
    next(error);
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
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getJobApplicationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobApplications = await jobApplication.findById(req.params.id);

    if (!jobApplications) {
      throw new NotFoundError("Job Application not found");
    }

    return res.status(200).json(jobApplications);
  } catch (error) {
    console.error("Error fetching job application:", error);
    next(error);
  }
};
