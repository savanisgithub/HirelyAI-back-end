import express from "express";
import jobsRouter from "./api/jobs";

const app = express();
app.use(express.json());  // gets or read the request body properly (eg: in Put requests). if not it'll give null values

app.use("/jobs", jobsRouter); 

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
