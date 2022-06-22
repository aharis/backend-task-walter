import express from "express";
import { loginUser, registerUser, updateUser} from "../../controllers/userControllers/user.controller.js";


const router = express.Router();

router.post("/register", registerUser )
router.post("/login", loginUser)
router.put("/update/:id", updateUser)
export default router;