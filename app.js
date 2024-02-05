const express = require("express")
const cors = require("cors");
const router = require("./routes");
const app = express()
const port = 5000;

app.use(cors())
app.use(router)

app.listen(port, () => console.log(`server running on port ${port}`))