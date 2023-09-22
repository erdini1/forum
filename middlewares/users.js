import { HTTP_STATUSES } from "../constants/http.js";

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