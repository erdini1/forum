import express from "express";
import { newComment, allCommentFromUser, updateComment, deleteComment } from "../controllers/comments.js";
import { isAuthenticated, validateTopicExistence } from "../middlewares/topics.js";
import { validateCommentData, validateCommentExistence, validateCommentOwnership } from "../middlewares/comments.js";

const router = express.Router()


router
    .get("/", isAuthenticated, allCommentFromUser)  // get all comment from user
    .post("/:idTopic", isAuthenticated, validateTopicExistence, validateCommentData, newComment)  //add new comment
    .put("/:idComment", isAuthenticated, validateCommentExistence, validateCommentOwnership, validateCommentData, updateComment)    // modify comment
    .delete("/:idComment", isAuthenticated, validateCommentExistence, validateCommentOwnership, deleteComment)    // delete comment


export default router