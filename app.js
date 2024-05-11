require('dotenv').config()
const express = require("express");
const router = require("./routes");
const app = express();
const cors = require('cors')
const passport = require('./lib/passport')
const session = require('express-session')

const swaggerJSON = require('./swagger.json');
const swaggerUI = require('swagger-ui-express')

app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json());
// app.use(session({
//     secret: 'rahasia',
//     resave: false,
//     saveUninitialized: false
// }))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 10000 }
  }))

app.use(passport.initialize());
app.use(passport.session());
// app.use(express.urlencoded({extended: false}))
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));
app.use(router)


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// main app