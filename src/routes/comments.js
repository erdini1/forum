import express from "express";
import { newComment } from "../controllers/comments.js";
import { isAuthenticated, validateTopicExistence } from "../middlewares/topics.js";
import { validateCommentData } from "../middlewares/comments.js";

const router = express.Router()

router.post("/:idTopic", isAuthenticated, validateTopicExistence, validateCommentData, newComment)

export default router