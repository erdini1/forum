import { HTTP_STATUSES } from "../constants/http.js"

export const validateCommentData = (req, res, next) => {
    const { comment } = req.body
    if (req.method === "POST" && !comment) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    if (comment === "") {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    next()

}