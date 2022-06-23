import express from "express";
import { loginUser, registerUser, updateUser } from "../../controllers/userControllers/user.controller.js";
import verifyToken from "../../middlewere/verifyToken.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.put("/update/:id", verifyToken, updateUser)

export default router;