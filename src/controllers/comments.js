import { HTTP_STATUSES } from "../constants/http.js"
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
    return res.status(HTTP_STATUSES.CREATED).json({ msg: "Comment added succesfully" })
}

export const allCommentFromUser = (req, res) => {
    const user = req.user
    const commentsUser = comments.filter(element => element.username === user.username)
    return res.status(HTTP_STATUSES.OK).json(commentsUser)
}

export const updateComment = (req, res) => {
    const { comment } = req.body
    comments.forEach(element => element.comment = comment)
    return res.status(HTTP_STATUSES.OK).json({ msg: "From updateController" })
}

export const deleteComment = (req, res) => {
    const comment = req.comment
    const indexComment = comments.findIndex(element => element.id === comment.id)
    comments.splice(indexComment, 1)
    return res.status(HTTP_STATUSES.OK).json({ msg: "Comment deleted succesfully" })
}