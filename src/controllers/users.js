import { HTTP_STATUSES } from "../constants/http.js"
import { users } from "../models/users.js"

export const newUser = (req, res) => {
    const { username, name, lastName, email, password } = req.body

    res.status(HTTP_STATUSES.CREATED).json({ msg: "POST from routes" })
}