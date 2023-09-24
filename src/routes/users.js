import express from "express"
import { register, login } from "../controllers/users.js"
import { validateUserData, validateUniqueUserData, validateUserPasswords, validateUserLoginData, validateUserCredentials } from "../middlewares/users.js"

const router = express.Router()

router
    .post("/", validateUserData, validateUniqueUserData, validateUserPasswords, register)       //SIGN UP
    .post("/login", validateUserLoginData, validateUserCredentials, login)   //SIGN IN

export default router