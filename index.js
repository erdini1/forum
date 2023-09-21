import expressConfig from "./config/express.config.js"
import { PORT } from "./config/env.config.js"

const app = expressConfig()

app.get("/", (req, res) => {
    return res.json("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})