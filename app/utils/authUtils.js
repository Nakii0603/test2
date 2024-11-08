// utils/authUtils.js
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET

// Function to generate a JWT token
export const generateToken = (email) => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
};

// Function to verify the JWT token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};
