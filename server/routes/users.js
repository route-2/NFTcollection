import express from "express";
import { signIn, signUp } from "../controllers/users.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/", auth, (req, res) => {
  res.send(`Hello ${req.userId}`);
});
