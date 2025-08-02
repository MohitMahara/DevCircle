import express from "express";
import { Router } from "express";
import { registerController, loginController } from "../controllers/authController.js";

const router = Router();

// Auth Routes

router.post("/register", registerController);

router.post("/login", loginController);




export default router;