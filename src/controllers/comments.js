import { comments } from "../models/comments.js"


export const newComment = (req, res) => {
    const topic = req.topic
    const user = req.user
    const { comment } = req.body
    comments.push({
        id: comments.length > 0 ? comments[comments.length - 1].id + 1 : 0,
        topicId: topic.id,
        username: user.username,
        comment
    })
    return res.json({ msg: "Comment added succesfully" })
}