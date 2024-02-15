const express = require("express");
const router = require("./routes");
const app = express();
const port = 8000;

app.use(express.json());
app.use('/api',router);
// http//:localhost:8000/api

app.listen(port, () => console.log(`server running on port ${port}`));