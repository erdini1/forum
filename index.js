import expressConfig from "./src/config/express.config.js"
import { PORT } from "./src/config/env.config.js"

import users from "./src/routes/users.js"

const app = expressConfig()

// Middleware de Ruta
app.use("/users", users)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})