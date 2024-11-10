import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const MONGODB_URL =
      process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw new Error("Database connection failed");
  }
};
