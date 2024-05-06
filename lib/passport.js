const passport = require('passport')
const { findUser } = require('../models/userModel')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'rahasia'
}, async (payload, done) => {

    console.log('payload',payload);
    const user = await findUser(payload.id)

    if(user){
        return done(null, user)
    } else  {
        return done(null, false)
    }
}))


module.exports = passport