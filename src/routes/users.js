import express from "express"
import { newUser } from "../controllers/users.js"
import { validateUserData, validateUniqueData, validateUserPasswords } from "../middlewares/users.js"

const router = express.Router()

router
    .post("/", validateUserData, validateUniqueData, validateUserPasswords, newUser)       //SIGN UP

export default router