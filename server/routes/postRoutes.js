import express from "express";
import { Router } from "express";
import { getPostsController, createPostController, deletePostController, getUserPostsController } from "../controllers/postController.js";


const router = Router();

router.get("/getPosts", getPostsController);

router.post("/createPost", createPostController);

router.delete("/deletePost/:id", deletePostController);

router.get("/userPosts/:uid", getUserPostsController);


export default router;