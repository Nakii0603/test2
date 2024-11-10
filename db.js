import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URI || "";
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection is successful");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw new Error("Database cannot be connected 🎉🔥");
  }
};

export { connectDatabase };
