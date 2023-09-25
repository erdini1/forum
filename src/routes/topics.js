import express from "express"
import { isAuthenticated } from "../middlewares/topics.js"
import { allUserTopics } from "../controllers/topics.js"

const router = express.Router()

router
    .get("/", isAuthenticated, allUserTopics)       //Get All Topics From User

export default router