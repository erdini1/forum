import express from "express";
import { newComment, allCommentFromUser } from "../controllers/comments.js";
import { isAuthenticated, validateTopicExistence } from "../middlewares/topics.js";
import { validateCommentData } from "../middlewares/comments.js";

const router = express.Router()


router
    .get("/", isAuthenticated, allCommentFromUser)  // get all comment from user
    .post("/:idTopic", isAuthenticated, validateTopicExistence, validateCommentData, newComment)  //add new comment
// modify comment
// delete comment


export default router