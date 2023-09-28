import { HTTP_STATUSES } from "../constants/http.js"
import { comments } from "../models/comments.js"

export const validateCommentData = (req, res, next) => {
    const { comment } = req.body
    if (!comment) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    next()
}

export const validateCommentExistence = (req, res, next) => {
    const idComment = +req.params.idComment
    const findComment = comments.find(element => element.id === idComment)
    if (!findComment) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The specified ID doesn't belong to a comment" })
    }
    req.comment = findComment
    next()
}

export const validateCommentOwnership = (req, res, next) => {
    const user = req.user
    const comment = req.comment
    if (comment.username !== user.username) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "You are not the owner of the comment" })
    }
    next()
}