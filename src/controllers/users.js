import { HTTP_STATUSES } from "../constants/http.js"
import { users } from "../models/users.js"

export const register = (req, res) => {
    const { username, name, lastName, email, password } = req.body
    const indexLastUser = users[users.length - 1].id     //ver el problema aca

    users.push({
        id: users.length > 0 ? indexLastUser + 1 : 0,
        username,
        name,
        lastName,
        email,
        password
    })
    res.status(HTTP_STATUSES.CREATED).json({ msg: "User created successfully" })
}

export const login = (req, res) => {
    return res.status(HTTP_STATUSES.OK).json({
        msg: "Loggued in successfully",
    })
}