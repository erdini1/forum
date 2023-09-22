import express from "express"
import { newUser } from "../controllers/users.js"
import { validateUserData } from "../middlewares/users.js"

const router = express.Router()

router
    .post("/", validateUserData, newUser)       //SIGN UP

export default router