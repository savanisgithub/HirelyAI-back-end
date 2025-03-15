import { Types } from "mongoose";
import OpenAI from "openai";
import jobApplication from "../infrastructure/schemas/jobApplication";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateRating(JobApplicationId: Types.ObjectId) {
  const JobApplication = await jobApplication
    .findById(JobApplicationId)
    .populate<{ job: { title: string; answers: string[] } }>("job");

  const content = `Role:${
    JobApplication?.job.title
  }, User Description: ${JobApplication?.answers.join(". ")}`;

  const completion = await client.chat.completions.create({
    messages: [{ role: "user", content }],
    model: "ft:gpt-3.5-turbo-0125:stemlink:hirelyai:BAi7QKPp",
  });

  const strResponse = completion.choices[0].message.content;
  console.log(strResponse);
  const response = JSON.parse(strResponse as string);
  console.log(response);
  if (!response.rate) {
    return "no response";
  }
  await jobApplication.findOneAndUpdate(
    { _id: JobApplicationId },
    { rating: response.rate }
  );
}
