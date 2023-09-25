import { HTTP_STATUSES } from "../constants/http.js"

export const allUserTopics = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json({ msg: "From topics" })
}