import expressConfig from "./src/config/express.config.js"
import { PORT } from "./src/config/env.config.js"

import users from "./src/routes/users.js"
import topics from "./src/routes/topics.js"
import comments from "./src/routes/comments.js"

const app = expressConfig()

// Middlewares de Ruta
app.use("/users", users)
app.use("/topics", topics)
app.use("/comments", comments)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})