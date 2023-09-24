import { HTTP_STATUSES } from "../constants/http.js"
import { users } from "../models/users.js"
import { generarId } from "../helpers/generarId.js"

export const register = (req, res) => {
    const { username, name, lastName, email, password } = req.body

    users.push({
        id: generarId(),
        username,
        name,
        lastName,
        email,
        password
    })
    res.status(HTTP_STATUSES.CREATED).json({ msg: "User created successfully" })
}

export const login = (req, res) => {
    const user = req.user
    return res.status(HTTP_STATUSES.OK).json({
        msg: "Loggued in successfully",
        id: user.id
    })
}