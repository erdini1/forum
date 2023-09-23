import { HTTP_STATUSES } from "../constants/http.js";
import { users } from "../models/users.js"

export const validateUserData = (req, res, next) => {
    const { username, name, lastName, email, password, passwordConf } = req.body
    if (req.method === "POST" && (!username || !name || !lastName || !email || !password || !passwordConf)) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    if ([username, name, lastName, email, password, passwordConf].some(element => element === "")) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    next()
}

export const validateUniqueEmail = (req, res, next) => {
    const { email } = req.body
    if (users.some(user => user.email === email)) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ msg: "The email is already in use" })
    }
    next()
}