const passport = require('passport')
const { findUser } = require('../models/userModel')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy

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


// passport oauth google
passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken,profile, done) => {
    console.log(profile);

    return done(null, profile)
}));

passport.serializeUser(function(user, done) {
    done(null, user)
});

passport.deserializeUser(function(obj, done){
    done(null, obj)
})




module.exports = passport