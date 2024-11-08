// middleware/authMiddleware.js
import { verifyToken } from "../utils/authUtils";

export const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(403).json({ error: "Access denied, token missing" });
  }

  try {
    const user = verifyToken(token);
    req.user = user; // Attach the user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};
