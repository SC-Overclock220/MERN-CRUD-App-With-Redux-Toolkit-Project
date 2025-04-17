import express from "express";
import signup from "../Controllers/AuthController/SignUp.Controller.js";
import login from "../Controllers/AuthController/Login.Controller.js";
import logout from "../Controllers/AuthController/Logout.Controller.js";
import auth from "../Middlewares/Auth.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",auth, logout);

export default router;
