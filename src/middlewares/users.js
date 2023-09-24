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

export const validateUniqueUserData = (req, res, next) => {
    const { username, email } = req.body
    // Reviso que el email no este repetido
    if (users.some(user => user.email === email)) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "The email is already in use" })
    }
    // Reviso que el nombre de usuario no este repetido
    if (users.some(user => user.username === username)) {
        return res.status(HTTP_STATUSES.UNAUTHORIZED).json({ error: "The username is already in use" })
    }
    next()
}

export const validateUserPasswords = (req, res, next) => {
    const { password, passwordConf } = req.body
    if (password !== passwordConf) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "Password confirmation doesn't match" })
    }
    next()
}

export const validateUserLoginData = (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "The fields cannot be empty" })
    }
    next()
}