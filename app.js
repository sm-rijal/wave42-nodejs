const express = require("express");
const router = require("./routes");
const app = express();
const flash = require('express-flash')
const session = require("express-session")

app.set('view engine', 'ejs');
app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use(express.urlencoded({extended: false}))
app.use(session({ 
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }}
));
app.use(flash());

app.use(router)
const PORT = 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// main app