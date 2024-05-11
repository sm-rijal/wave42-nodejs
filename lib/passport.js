const passport = require('passport')
const { findUser } = require('../models/userModel')
const { loginUser, registerUser } = require('../models/authModel')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken') 

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, async (payload, done) => {

    // console.log('payload',payload);
    const user = await findUser(payload.id)

    const newUser = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    if(user){
        return done(null, newUser)
    } else  {
        return done(null, false)
    }
}))


// passport oauth google
passport.use(new GoogleStrategy({
    clientID: process.env.clientIDGoogle,
    clientSecret: process.env.clientSecretGoogle,
    callbackURL: '/auth/google/callback'
}, async(accessToken, refreshToken,profile, done) => {
    console.log(profile);

    const encryptedPassword = bcrypt.hashSync(profile?.emails[0].value, 10)

    const user = {
        name: profile.displayName,
        email: profile.emails[0].value,
        password: encryptedPassword
    }

    // cek email 
    const userExist = await loginUser(profile.emails[0].value)
    // console.log('userExist', userExist);

    let idUser
    if(!userExist){
        const response = await registerUser(user)
        idUser = response[0].id
    }

    // create token
    const secretKey = process.env.SECRET_KEY
    const token = jwt.sign({
        id: userExist ? userExist.id : idUser,
        email: user.email
    }, secretKey, {expiresIn: '1h'})

    const userToken = {
        user: user,
        accessToken: token
    }
    // console.log(userToken);

    return done(null, userToken)
}));

passport.serializeUser(function(user, done) {
    done(null, user)
});

passport.deserializeUser(function(obj, done){
    done(null, obj)
})




module.exports = passport