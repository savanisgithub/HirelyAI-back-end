import { NextFunction, Request, Response } from "express";
import Job from "../infrastructure/schemas/job";
import NotFoundError from "../domain/errors/not-found-error";
import ValidationError from "../domain/errors/validation-error";
import { z } from "zod";

export const getAlljobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const job = await Job.find();
    // throw new Error("");
    return res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};

export const createJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobs = z
      .object({
        title: z.string(),
        description: z.string(),
        type: z.string(),
        location: z.string(),
        questions: z.string().array().optional(),
      })
      .safeParse(req.body);

    if (!jobs.success) {
      throw new ValidationError(jobs.error.message);
    }
    await Job.create(jobs);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobs = await Job.findById(req.params.id);
    if (!jobs) {
      throw new NotFoundError("Job Not Found");
    }
    return res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobs = await Job.findByIdAndDelete(req.params.id);
    if (!jobs) {
      throw new NotFoundError("Job Not Found");
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobToUpdate = Job.findById(req.params.id);
    if (!jobToUpdate) {
      throw new NotFoundError("Job Not Found");
    }

    const job = req.body;
    if (
      typeof job.title === "undefined" ||
      typeof job.description === "undefined" ||
      typeof job.location === "undefined" ||
      typeof job.type === "undefined"
    ) {
      throw new ValidationError("");
    }

    await Job.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      location: req.body.location,
      type: req.body.type,
      description: req.body.description,
      questions: req.body.questions,
    });
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/// restful api
