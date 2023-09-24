import express from "express"
import { register, login } from "../controllers/users.js"
import { validateUserData, validateUniqueData, validateUserPasswords } from "../middlewares/users.js"

const router = express.Router()

router
    .post("/", validateUserData, validateUniqueData, validateUserPasswords, register, login)       //SIGN UP
    .post("/login", login)   //SIGN IN

export default router