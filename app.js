const express = require("express");
const router = require("./routes");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use(express.urlencoded({extended: false}))
app.use(router)
const PORT = 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// main app