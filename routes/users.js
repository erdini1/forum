import express from "express"

import { newUser } from "../controllers/users.js"

const router = express.Router()

router
    .post("/", newUser)

export default router