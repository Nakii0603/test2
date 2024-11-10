import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./db.js";

dotenv.config();
const app = express();
app.use(express.json());
connectDatabase();
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
