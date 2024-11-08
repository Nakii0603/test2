
// controller/authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET 

// Function to handle user login
export const loginUser = async (email, password) => {
  // Here you would check user credentials from the database (not implemented)
  // Simulate a user
  const user = { email, password: "hashedPasswordFromDb" };  // Example

  // Compare provided password with stored hash
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

// Function to handle user signup
export const signupUser = async (email, password) => {
  // Here you would save the user to the database (not implemented)
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Simulate user creation
  const newUser = { email, password: hashedPassword };

  // Generate JWT token for the new user
  const token = jwt.sign({ email: newUser.email }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};
