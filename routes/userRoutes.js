import express from "express";
import { addUser, getUserData } from "../controllers/userController.js";
import { authenticateJWT } from "../middleware/middleware.js";
const router = express.Router();

router.post("/add-user", addUser);
router.get("/me", authenticateJWT, getUserData);

export default router;
