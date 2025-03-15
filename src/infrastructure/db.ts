import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString = process.env.CONNECTION_STRING;
    if (!connectionString) {
      throw new Error("Please add the connection string");
    }
    await mongoose.connect(connectionString);
    console.log("DB Connection successful!");
  } catch (error) {
    console.log("DB Connection failed!");
    console.log(error);
  }
};
