import expressConfig from "./config/express.config.js"
import { PORT } from "./config/env.config.js"

import users from "./routes/users.js"

const app = expressConfig()

app.use("/users", users)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})