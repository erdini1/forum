import { HTTP_STATUSES } from "../constants/http.js"
import { topics } from "../models/topics.js"
import { users } from "../models/users.js"

export const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split("Bearer ")[1]
    const user = users.find(element => element.id === token)
    if (!user) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "Invalid credentials" })
    }
    req.user = user
    next()
}

export const validateTopicExistence = (req, res, next) => {
    const idTopic = +req.params.idTopic
    const findTopic = topics.find(element => element.id === idTopic)
    if (!findTopic) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The specified ID doesn't belong to a topic" })
    }
    req.topic = findTopic
    next()
}

export const validateTopicData = (req, res, next) => {
    const { title, description } = req.body
    if (req.method === "POST" && (!title || !description)) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    if ([title, description].some(element => element === "")) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    next()
}

export const validateTopicOwnership = (req, res, next) => {
    const user = req.user
    const topic = req.topic
    if (topic.username !== user.username) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "You are not the owner of the topic to be modified" })
    }
    next()
}