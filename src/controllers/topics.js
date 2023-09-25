import { HTTP_STATUSES } from "../constants/http.js"
import { topics } from "../models/topics.js"
import { comments } from "../models/comments.js"

export const allTopics = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json(topics)
}

export const getTopic = (req, res) => {
    const topic = req.topic
    return res.status(HTTP_STATUSES.OK).json(topic)
}