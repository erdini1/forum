import express from "express"
import { isAuthenticated, validateTopicData, validateTopicExistence, validateTopicOwnership } from "../middlewares/topics.js"
import { allTopics, getTopic, newTopic, updateTopic } from "../controllers/topics.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allTopics)       //Get All Topics
    .post("/", isAuthenticated, validateTopicData, newTopic)    //Add new Topic
    .get("/:idTopic", isAuthenticated, validateTopicExistence, getTopic)    //Get one Topic
    .put("/:idTopic", isAuthenticated, validateTopicExistence, validateTopicData, validateTopicOwnership, updateTopic)      //Modify Topic

export default router