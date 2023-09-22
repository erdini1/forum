import { HTTP_STATUSES } from "../constants/http.js"

export const newUser = (req, res) => {
    res.status(HTTP_STATUSES.CREATED).json({ msg: "POST from routes" })
}