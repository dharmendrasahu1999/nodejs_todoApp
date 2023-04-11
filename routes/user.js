import express from "express";
import { register, login, getMyProfile,logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//dynamic id
router.get("/me",isAuthenticated,getMyProfile)

router.post("/new", register)
router.post("/login", login)
router.get("/logout", logout)



export default router;