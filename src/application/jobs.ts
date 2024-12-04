import { Request, Response } from "express";
import job from "../infrastructure/jobs";


export const getAlljobs = (req:Request,res:Response) =>{
    return res.json(job);
}

export const createJobs = (req:Request,res:Response) =>{
    const jobs = req.body;

    if (!(typeof jobs.title === "string" && typeof jobs.id === "string" && typeof jobs.location === "string" && typeof jobs.type === "string")){
        return res.status(400).send();
    }
    job.push(req.body);
    return res.status(201).send();
}

export const getJobById = (req:Request,res:Response) =>{
    const jobs = job.find(el => el.id === req.params.id);
    if (!jobs){
        return res.status(404).send();
    }
    return res.json(jobs);
}

export const deleteJob = (req:Request,res:Response) =>{
    const removeIndex = job.findIndex(el => el.id === req.params.id);
    if (removeIndex == -1){
        return res.status(404).json("Can't find the job").send();
    }
    job.splice(removeIndex, 1);
    return res.status(204).send();

}

export const updateJob = (req:Request,res:Response) =>{
    const updateIndex = job.findIndex(el => el.id === req.params.id);
    if (updateIndex == -1){
        return res.status(404).send();
    }
    job[updateIndex].title = req.body.title;
    job[updateIndex].location = req.body.location;
    job[updateIndex].type = req.body.type;
    return res.status(201).send();
}

/// restful api 
