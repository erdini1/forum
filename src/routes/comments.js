import express from "express";
import { newComment, allCommentFromUser, updateComment } from "../controllers/comments.js";
import { isAuthenticated, validateTopicExistence } from "../middlewares/topics.js";
import { validateCommentData, validateCommentExistence } from "../middlewares/comments.js";

const router = express.Router()


router
    .get("/", isAuthenticated, allCommentFromUser)  // get all comment from user
    .post("/:idTopic", isAuthenticated, validateTopicExistence, validateCommentData, newComment)  //add new comment
    .put("/:idTopic/:idComment", isAuthenticated, validateCommentExistence, validateCommentData, updateComment)    // modify comment
// delete comment


export default router