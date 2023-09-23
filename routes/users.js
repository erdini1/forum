import express from "express"
import { newUser } from "../controllers/users.js"
import { validateUserData, validateUniqueEmail } from "../middlewares/users.js"

const router = express.Router()

router
    .post("/", validateUserData, validateUniqueEmail, newUser)       //SIGN UP

export default router