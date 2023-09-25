import express from "express"
import { isAuthenticated, validateTopicExistence } from "../middlewares/topics.js"
import { allTopics, getTopic } from "../controllers/topics.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allTopics)       //Get All Topics
    .get("/:idTopic", isAuthenticated, validateTopicExistence, getTopic)    //Get Topic

export default router