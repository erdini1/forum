import { HTTP_STATUSES } from "../constants/http.js"
import { topics } from "../models/topics.js"

export const allTopics = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json(topics)
}

export const getTopic = (req, res) => {
    const topic = req.topic
    return res.status(HTTP_STATUSES.OK).json(topic)
}

export const newTopic = (req, res) => {
    const user = req.user
    const { title, description } = req.body

    topics.push({
        id: topics[topics.length - 1].id + 1,
        username: user.username,
        title,
        description
    })

    return res.status(HTTP_STATUSES.CREATED).json({ msg: "Topic created succesfully" })
}

export const updateTopic = (req, res) => {
    const topic = req.topic
    const { title, description } = req.body

    topics.forEach(element => (
        element.id === topic.id ? (
            element.title = title || element.title,
            element.description = description || element.description
        ) : ""
    ))
    return res.status(HTTP_STATUSES.OK).json({ msg: "Topic modified succesfully" })
}

export const deleteTopic = (req, res) => {
    const topic = req.topic
    const indexTopic = topics.findIndex(element => element.id === topic.id)
    topics.splice(indexTopic, 1)
    return res.status(HTTP_STATUSES.OK).json({ msg: "Topic deleted succesfully" })
}