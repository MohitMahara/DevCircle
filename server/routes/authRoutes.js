import express from "express";
import { Router } from "express";
import { registerController, loginController, getUserController } from "../controllers/authController.js";

const router = Router();

// Auth Routes

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/getUser/:uid", getUserController);





export default router;