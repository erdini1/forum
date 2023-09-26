import express from "express"
import { isAuthenticated, validateTopicData, validateTopicExistence } from "../middlewares/topics.js"
import { allTopics, getTopic, newTopic } from "../controllers/topics.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allTopics)       //Get All Topics
    .get("/:idTopic", isAuthenticated, validateTopicExistence, getTopic)    //Get Topic
    .post("/", isAuthenticated, validateTopicData, newTopic)    //Add new Topic

export default router