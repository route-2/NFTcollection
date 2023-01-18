import express from "express";
import { getPosts } from "../controllers/posts.js";
import { createPost } from "../controllers/posts.js";
import { updatePost } from "../controllers/posts.js";
import { deletePost } from "../controllers/posts.js";
import { likePost } from "../controllers/posts.js"; 
import { getPostsBySearch } from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search",getPostsBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id",auth, deletePost);
router.patch("/:id/likePost",auth,likePost); 

export default router;

// now that you use auth (middleware) b4 other actions, you can populate or gather those requests right b4 your next() action