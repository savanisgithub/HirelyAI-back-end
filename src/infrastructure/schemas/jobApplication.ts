import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  rating: {
    type: String,
  },
});

const jobApplication = mongoose.model("JobApplication", jobApplicationSchema);
export default jobApplication;
