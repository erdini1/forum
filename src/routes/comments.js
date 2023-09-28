import express from "express";
import { newComment } from "../controllers/comments.js";
import { isAuthenticated, validateTopicExistence, validateTopicOwnership } from "../middlewares/topics.js";
import { validateCommentData } from "../middlewares/comments.js";

const router = express.Router()

// get all comment from user
router.post("/:idTopic", isAuthenticated, validateTopicExistence, validateCommentData, newComment)  //add new comment
// modify comment
// delete comment


export default router