const express = require("express");
const router = require("./routes");
const app = express();
const cors = require('cors')
require('dotenv').config()
const passport = require('./lib/passport')

app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json());
app.use(passport.initialize());
// app.use(express.urlencoded({extended: false}))

app.use(router)
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// main app