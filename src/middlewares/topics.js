import { HTTP_STATUSES } from "../constants/http.js"
import { users } from "../models/users.js"

export const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split("Bearer ")[1]
    const user = users.find(element => element.id === token)
    if (!user) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json({ error: "Invalid credentials" })
    }
    req.user = user
    next()
}